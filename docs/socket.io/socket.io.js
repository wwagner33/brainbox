// running in a none node.js/socket.io backend. Just a simple WebServer
// In this case we provide a Socket.io mock object without any functionality
//
function io(){
    return {
        emit:function(){

        },
        on:function(event, callback){
            // fake the successful connection in the serverless enviroment
            //
            if(event==="connect"){
                setTimeout(callback,5);
            }

            // if we run in a headless/serverless mode like on the gh-pages/docs site
            // in this case we fire a special event to indicate that we can remove the
            // file-open / file/save button
            if(event==="serverless"){
              setTimeout(callback,1);
            }
        }
    };
}
