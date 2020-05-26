#!/bin/bash
echo '# ffserver configuration for an mjpeg stream
# Adapted from
# https://gist.github.com/peterhellberg/ebfc72147c2009ee720aafe57ce9c141
HTTPPort 8080
HTTPBindAddress 0.0.0.0
MaxHTTPConnections 200
MaxClients 100
MaxBandWidth 500000
CustomLog -

<Feed camera.ffm>
File /tmp/camera.ffm
FileMaxSize 5M
</Feed>

<Stream camera.mjpeg>
Feed camera.ffm
Format mpjpeg
# Make sure frame rate and size
# match those passed to ffmpeg
VideoFrameRate 5
VideoSize 640x480
VideoGopSize 12
VideoBitRate 4096
VideoBufferSize 4096
VideoQMin 5
VideoQMax 51
NoAudio
Strict -1
</Stream>

<Stream static-camera.jpg>
Feed camera.ffm
Format jpeg
VideoFrameRate 2
VideoIntraOnly
VideoSize 640x480
NoAudio
NoDefaults
Strict -1
</Stream>' > ${PWD}/.ffserver.conf
(ffserver -f ${PWD}/.ffserver.conf > /dev/null)&
(ffmpeg -input_format mjpeg -video_size 640x480 -framerate 5 -i /dev/video0 -c:v copy http://localhost:8090/camera.ffm)&
(rm ${PWD}/.ffserver.conf)&
