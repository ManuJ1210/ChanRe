const BackgroundAnimation = () => {
  const bubbles = [
    { left: "25%", width: 80, height: 80, delay: "0s" },
    { left: "10%", width: 20, height: 20, delay: "2s", duration: "12s" },
    { left: "70%", width: 20, height: 20, delay: "4s" },
    { left: "40%", width: 60, height: 60, delay: "0s", duration: "18s" },
    { left: "65%", width: 20, height: 20, delay: "0s" },
    { left: "75%", width: 110, height: 110, delay: "3s" },
    { left: "35%", width: 150, height: 150, delay: "7s" },
    { left: "50%", width: 25, height: 25, delay: "15s", duration: "45s" },
    { left: "20%", width: 15, height: 15, delay: "2s", duration: "35s" },
    { left: "85%", width: 150, height: 150, delay: "0s", duration: "11s" },
    
  ];

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#ffffff",
    zIndex: -1,
    overflow: "hidden",
  };

  const listStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    listStyle: "none",
  };

  const boxBaseStyle = {
    position: "absolute",
    display: "block",
    backgroundColor: "rgba(128, 128, 128, 1.5)", 
    bottom: "-150px",
    animationName: "floatBox",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    borderRadius: "50%", 
  };

  return (
    <>
      <style>{`
        @keyframes floatBox {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>

      <div style={containerStyle}>
        <ul style={listStyle}>
          {bubbles.map((box, i) => (
            <li
              key={i}
              style={{
                ...boxBaseStyle,
                left: box.left,
                width: `${box.width}px`,
                height: `${box.height}px`,
                animationDelay: box.delay,
                animationDuration: box.duration || "10s",
              }}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default BackgroundAnimation;
