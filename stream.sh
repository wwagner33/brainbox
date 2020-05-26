#!/bin/bash
echo 'HTTPPort 8090
HTTPBindAddress 0.0.0.0
MaxHTTPConnections 200
MaxClients 100
MaxBandWidth 500000
CustomLog -

<Feed camera.ffm>
   File /tmp/camera.ffm
   FileMaxSize 200M
</Feed>

<Stream camera.mpeg>
Feed camera.ffm
Format mpeg
VideoFrameRate 25
#VideoIntraOnly
VideoBitRate 4096
VideoBufferSize 4096
VideoSize hd720
VideoQMin 5
VideoQMax 51
#NoAudio
Strict -1
</Stream>' > ${PWD}/.ffserver.conf
(ffserver -f ${PWD}/.ffserver.conf > /dev/null)&
(ffmpeg -s `1280x720 -f` v4l2 -i /dev/video0 -ac 1 -f alsa -i hw:2,0 http://localhost:8090/camera.ffm)&
(rm ${PWD}/.ffserver.conf)&
