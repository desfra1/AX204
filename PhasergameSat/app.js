console.log("hahahahahaha");

// Declare the variables
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var score = 0;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32)
}

function create(){
	// Give game physics engine
	game.physics.startSystem(Phaser.Physics.ARCADE);
	// Add the sky
	game.add.sprite(0, 0, 'sky');

	// Physics group
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	// Ground
	var ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	// Ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	var ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;

	// Player
	player = game.add.sprite(32,game.world.height - 150, 'dude');
		// animate the sprite
		player.animations.add('left',[0,1,2,3],10,true)
		player.animations.add('right',[5,6,7,8],10,true)
		game.physics.arcade.enable(player);
		// physics properties
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;
}

	// Baddie
	enemy1 = game.add.sprite(750, 20, 'baddie');
		// animate the sprite
		enemy1.animations.add('left',[0,1],10,true)
		enemy1.animations.add('right',[2,3],10,true)
		game.physics.arcade.enable(enemy1);
		// physics properties
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y = 500;
		enemy1.body.collideWorldBounds = true;


// Keyboard inputs
cursors = game.input.Keyboard.createCursorKeys();

function update(){


	// Collision between user and platforms
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy1, platforms);

	// reset player velocity
	player.body.velocity.x = 0;


	// keyboard event
	if (cursors.left.isdown) {
		player.body.velocity.x= -150;
		player.animations.play("left");
	}else if (cursors.right.isdown) {
		player.body.velocity.x= 150;
		player.animations.play("right");
	}else{
		// when player sprite stops
		player.animations.stop();
		player.frame = 4;
	}

	// allow player sprite to jump
	if (cursors.up.isDown && player.body.touching.down){

	}
		player.body.velocity.y = -350;

}


















//
