AFRAME.registerComponent("target-ring",{
    init:function(){
        for(var i = 1;i<51;i++){
            //ID
            var id = `ring${i}`;
            //POSITION VARIABLES
            var posX = (Math.random()*3000+(-1000));
            var posY = (Math.random()*2+(-1));
            var posZ = (Math.random()*3000+(-1000));
            var position = {x:posX,y:posY,z:posZ}
            //CALL THE FUNCTION
            this.createRings(id,position);
        }
    },
    createRings:function(id,position){
        var terrainE1 = document.querySelector("#terrain");
        var ringE1 = document.createElement("a-entity");

        ringE1.setAttribute("id",id);
        ringE1.setAttribute("position",position);
        ringE1.setAttribute("material","color","#ff9100");
        ringE1.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:5
        });
        ringE1.setAttribute("game-play",{elementId:`#${id}`});
        ringE1.setAttribute("geometry",{primitive:"torus",radius:8})
        terrainE1.appendChild(ringE1);
   }
})