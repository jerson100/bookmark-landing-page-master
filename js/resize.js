export const resizeDocument = (
                    mediasQueries = [
                        { media , action }
                    ]
                ) => {
    window.addEventListener('resize',()=>{
        mediasQueries.forEach(m=>{
            console.log(window.matchMedia(m.media).matches);
            if(window.matchMedia(m.media).matches){
                m.action();
            }
        });
    });
};