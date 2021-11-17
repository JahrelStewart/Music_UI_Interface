var controls;
var mover = 1;
var xBreaker = 0;
var yBreaker = 0;
var cantClick = false;
var expansion;
var opaque;
var cantScroll = false;

scrollHeights();

innerText(item);
back(item);

var scene = new THREE.Scene();

for (var objs of objArr) {
	group.attach(objs);
}

scene.attach(group);

layout(itemAmt, 0);

camera.position.set(-viewFalse, -viewUpY, viewFalseZoom);

var HTMLrenderer = new THREE.CSS3DRenderer({ antialias: true });
HTMLrenderer.setSize(bodyThree.offsetWidth, bodyThree.offsetHeight);
HTMLrenderer.domElement.style.position = 'absolute';
bodyThree.appendChild(HTMLrenderer.domElement);

window.addEventListener('resize', () => {
	HTMLrenderer.setSize(bodyThree.offsetWidth, bodyThree.offsetHeight);
	camera.aspect = bodyThree.offsetWidth / bodyThree.offsetHeight;
	camera.updateProjectionMatrix();
});

function resizeRendererToDisplaySize(renderer) {
	const canvas = renderer.domElement;
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;
	const needResize = canvas.width !== width || canvas.height !== height;
	if (needResize) {
		renderer.setSize(width, height, false);
	}
	return needResize;
}

animate();

function animate() {
	render();
	circ.setAttribute('cx', heads[1].offsetLeft + heads[1].offsetWidth / 2);
	camera.updateProjectionMatrix();
	requestAnimationFrame(animate);
}

function render() {
	HTMLrenderer.render(scene, camera);
}

scrollThumb.addEventListener('mousedown', down);

function down() {
	viewShift = true;

	if (cantClick == false) {
		cantClick = true;
		layout(amtColumn, 0.3);
		itemText.style.transform = 'translateX(' + moveViewText + 'px)';
		document.querySelector('#itemTextContainer').style.justifyItems = 'end';
		scrollHeights();
		rmbr = -1;

		$('.lineFive').fadeTo('fast', 0);
		$('.lineSix').fadeTo('fast', 0);
		$('.playing').fadeTo('fast', 0);

		var downAnimate = gsap.timeline({ paused: false });

		downAnimate.to(camera.rotation, {
			y: 0,
		});
		downAnimate.to(
			camera.position,
			{
				x: 1000 - viewTrue,
				y: -THREE.MathUtils.mapLinear(
					equation,
					-1,
					scrollSect.offsetHeight - scrollThumb.offsetHeight,
					637,
					mapLast
				),
				z: 1345,
				duration: 0.3,
				ease: 'back.out(0.8)',
			},
			'-=0.5'
		);

		window.addEventListener('mousedown', (e) => {
			if (
				e.target === bodyThree ||
				bodyThree.contains(e.target) ||
				e.target === scrollSect ||
				scrollSect.contains(e.target)
			) {
				return;
			}
			if (viewShift == true) {
				$('.lineFive').fadeTo('fast', 1);
				$('.lineSix').fadeTo('fast', 1);
				$('.playing').fadeTo('fast', 1);
				document.querySelector(
					'#itemTextContainer'
				).style.justifyItems = isMoveView;

				var shift = { var: equation };
				viewShift = false;
				cantClick = false;

				equation = THREE.MathUtils.mapLinear(
					item,
					0,
					itemAmt - 1,
					0,
					scrollSect.offsetHeight - scrollThumb.offsetHeight
				);

				gsap.to(shift, {
					var: equation,
					onUpdate: function () {
						scrollThumb.style.transform =
							'translateY(' + shift.var + 'px)';
					},
					ease: 'circ.out',
					duration: 0.5,
				});

				layout(itemAmt, 0);
				upAnimates(item, 'power.out', 0.3);
				back(item);
				innerText(item);
				itemText.style.transform = 'translateX(0px)';
			}
		});
	}
}

function expand(amt, i, easaz, due) {
	expansion = gsap.to(objArr[i].scale, {
		x: amt,
		y: amt,
		z: amt,
		duration: due,
		ease: easaz,
	});
}
function opacity(amt, i) {
	for (let z = 0; z < itemAmt; z++) {
		if (z == i) {
			continue;
		} else {
			opaque = gsap.to(document.querySelector('#item-' + z), {
				css: { opacity: amt },
				duration: 0.2,
				ease: 'linear',
			});
		}
	}
}
