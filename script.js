document.body.addEventListener("mousemove", e => {
        gsap.to(".a1", {
          x: e.clientX,
          y: e.clientY,
          stagger: -0.05
        });
      });