var planeMaker = {
    loader: new THREE.ObjectLoader(),
    currentPlane: '',
    planeZoffset: -20,
    loadPlane: function(plane) {
        switch (plane) {
            case 'main':
                this.loadMain();
                break;
            case 'UFO':
                this.loadUFO();
                break;
            case 'F22':
                this.loadF22();
                break;
            case 'falcon':
                this.loadFalcon();
                break;
            case 'toy':
                this.loadToy();
                break;
        }
    },
    loadMain: function() {
        this.loader.load('/models/plane_main.js', function(mesh) {

            currentPlane = 'main';

            var scale = 0.2;
            mesh.scale.set(scale, scale, scale);
            mesh.position.y = 0;

            movementScaleX = 0.2;
            movementScaleY = 0.2;

            var propeller = mesh.children[0].children[0];

            plane.position.z = -0 + planeMaker.planeZoffset;
            plane.rotation.x = 0.2;
            plane.add(mesh);

            planeControls.rotatePropeller(propeller, 'x');

            planeMaterials = [];
            planeMeshList = [];
            for (var i = 0; i < mesh.children[0].children.length; i++) {

                if(mesh.children[0].children[i].children[0].material){
                    planeMaterials.push(mesh.children[0].children[i].children[0].material);
                }

                if (mesh.children[0].children[i].name == 'Body.1') {
                    planeMeshList.push(mesh.children[0].children[i].children[0]);
                }

            };

            if (game.sound) {
                game.sound.stop();
            }

            game.sound = createjs.Sound.play("propeller_sound", {
                loop: -1,
                volume: game.volume
            });
            game.sound.pause();

            // game.message = 'You have now selected the normal Propeller plane';
            // game.updatePauseMessage();
        })
    },
    loadUFO: function() {
        this.loader.load('/models/UFO.js', function(mesh) {

            currentPlane = 'UFO';

            var scale = 1.2;
            mesh.scale.set(scale, scale, scale);
            mesh.position.y = 0;

            movementScaleX = 0.3;
            movementScaleY = 0.15;

            plane.position.z = -10 + planeMaker.planeZoffset;
            plane.rotation.x = 0.2;
            plane.add(mesh);

            planeControls.rotatePlane(mesh);

            planeMaterials = [];
            planeMeshList = [];
            for (var i = 0; i < mesh.children[0].children.length; i++) {
                planeMaterials.push(mesh.children[0].children[i].children[0].material);
                planeMeshList.push(mesh.children[0].children[i].children[0])
            };

            if (game.sound) {
                game.sound.stop();
            }

            game.sound = createjs.Sound.play("UFO_sound", {
                loop: -1,
                volume: game.volume
            });
            game.sound.pause();

            // game.message = 'You have now selected the UFO';
            // game.updatePauseMessage();
        })

    },
    loadF22: function() {
        this.loader.load('/models/F22.js', function(mesh) {

            currentPlane = 'F22';

            var scale = 0.6;
            mesh.scale.set(scale, scale, scale);
            mesh.position.y = -1;

            movementScaleX = 0.3;
            movementScaleY = 0.15;

            plane.position.z = -10 + planeMaker.planeZoffset;
            plane.rotation.x = 0.2;
            plane.add(mesh);

            var eng1 = mesh.children[0];
            var eng2 = mesh.children[1];
            var eng3 = mesh.children[2];

            eng1.children[0].material.color.r = eng2.children[0].material.color.r = eng3.children[0].material.color.r = 0.97;
            eng1.children[0].material.color.g = eng2.children[0].material.color.g = eng3.children[0].material.color.g = 0.7;
            eng1.children[0].material.color.b = eng2.children[0].material.color.b = eng3.children[0].material.color.b = 0.06;
            planeControls.rotatePropeller(eng1, 'z');
            planeControls.rotatePropeller(eng2, 'z');
            planeControls.rotatePropeller(eng3, 'z');

            planeMaterials = [];
            planeMeshList = [];
            console.log(mesh);
            for (var i = 0; i < mesh.children.length; i++) {
                planeMaterials.push(mesh.children[i].material);
                planeMeshList.push(mesh.children[i].children[0])
            };

            controls.movementSpeed = 120;
            controls.lookSpeed = 0.08;

            if (game.sound) {
                game.sound.stop();
            }

            game.sound = createjs.Sound.play("jet_sound", {
                loop: -1,
                volume: game.volume
            });
            game.sound.pause();

            // game.message = 'You have now selected F22 Fighter Jet';
            // game.updatePauseMessage();
        })
    },
    loadFalcon: function() {
        this.loader.load('/models/falcon.js', function(mesh) {

            currentPlane = 'falcon';

            var scale = 0.4;
            mesh.scale.set(scale, scale, scale);
            mesh.position.y = -1;
            mesh.rotation.y = 3.141592;
            mesh.rotation.x = 0.1

            movementScaleX = 0.3;
            movementScaleY = 0.15;

            plane.position.z = -10 + planeMaker.planeZoffset;
            plane.rotation.x = 0.2;
            plane.add(mesh);

            planeMaterials = [];
            planeMeshList = [];

            for (var i = 0; i < mesh.children[0].children.length; i++) {
                planeMaterials.push(mesh.children[0].children[i].children[0].material);
                planeMeshList.push(mesh.children[0].children[i].children[0])
            };

            if (game.sound) {
                game.sound.stop();
            }

            game.sound = createjs.Sound.play("falcon_sound", {
                loop: -1,
                volume: game.volume
            });
            game.sound.pause();

            // game.message = '<span class="star-wars">You have now selected the Millenium Falcon, May the force be with you!</span>';
            // game.updatePauseMessage();
        })
    },
    loadToy: function() {
        this.loader.load('/models/toy_plane.js', function(mesh) {

            currentPlane = 'toy';

            var scale = 40;
            mesh.scale.set(scale, scale, scale);
            mesh.position.y = 0;
            mesh.rotation.y = 3.141592;

            movementScaleX = 0.3;
            movementScaleY = 0.15;

            plane.position.z = -6.5 + planeMaker.planeZoffset;
            plane.rotation.x = 0.2;
            plane.add(mesh);

            planeMaterials = [];
            planeMeshList = [];

            for (var i = 0; i < mesh.children[0].children.length; i++) {
                planeMaterials.push(mesh.children[0].children[i].children[0].material);
                planeMeshList.push(mesh.children[0].children[i].children[0])
            };

            var propeller = mesh.children[0].children[0];
            planeControls.rotatePropeller(propeller, 'y');

            if (game.sound) {
                game.sound.stop();
            }

            game.sound = createjs.Sound.play("propeller_sound", {
                loop: -1,
                volume: game.volume
            });
            game.sound.pause();

            // game.message = 'You have now selected the Toy Plane';
            // game.updatePauseMessage();

        })
    },
    switch: function(parameter) {

        camera.remove(plane);
        plane = new THREE.Object3D();

        this.loadPlane(parameter);
        camera.add(plane);

        // if(!game.paused){
        //     game.pause();
        // }
    },
    autoSwitch: function() {

        switch (currentPlane) {
            case '':
                this.
                switch ('main');
                break;
            case 'main':
                this.
                switch ('UFO');
                break;
            case 'UFO':
                this.
                switch ('F22');
                break;
            case 'F22':
                this.
                switch ('falcon');
                break;
            case 'falcon':
                this.
                switch ('toy');
                break;
            case 'toy':
                this.
                switch ('main');
                break;
        }



        // controls.freeze = false;
        // setTimeout(function(){
        //     controls.freeze = true;
        // },100)

    },
    makePlaneExplode: function() {
        game.sound.stop();
        playing = false;
        controls.freeze = true;
        console.log('hit');

        createjs.Sound.play("boom");

        var planePos = new THREE.Vector3().setFromMatrixPosition(plane.matrixWorld);

        var mati = new THREE.MeshLambertMaterial( {
            color: 0xE67B0D,
            transparent: true,
            opacity: 1
        } );

        var expl = new THREE.Mesh( new THREE.SphereGeometry( 1, 10, 10), mati);

        expl.position.setFromMatrixPosition(plane.matrixWorld);
        scene.add(expl);

        //removing the plane, so it doesn't cause rendering issues
        camera.remove(plane);

        var interval = setInterval(function(){
            expl.scale.x += 0.1;
            expl.scale.y += 0.1;
            expl.scale.z += 0.1;

        }, 3)

        var opInterval;
        setTimeout(function(){
            opInterval = setInterval(function(){
                expl.material.opacity -= 0.03;
            }, 10)
        },400)

        setTimeout(function(){
            clearInterval(interval);
            clearInterval(opInterval);

        }, 4000)

        setTimeout(function(){
            game.endOfLevel();
        }, 1000)
    }
}
