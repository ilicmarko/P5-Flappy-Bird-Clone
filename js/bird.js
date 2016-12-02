function Bird() {
	this.x = 80;
	this.y = height / 2;
	this.size = 32;

	this.gravity = 4;
	this.velocity = 0;

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, this.size);
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.velocity *= 0.5;
		this.y += this.velocity;

		if(this.y > height) {
			this.y = height;
		}

		if(this.y < 0) {
			this.y = 0;
		}
	}

	this.jump = function() {
		this.y -= 100;
	}
}
