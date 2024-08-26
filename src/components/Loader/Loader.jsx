const Loader = ({ size, padding }) => {
  return (
    <div style={{ padding: padding, textAlign: "center" }}>
      <div
        style={{
          width: size,
          height: size,
          border: "4px solid gray",
          borderTop: "4px solid blue",
          borderRadius: "50%",
          animation: "spin 0.65s linear infinite",
        }}
      >
        {/* Loader simplu */}
      </div>
    </div>
  );
};

// Adaugă un stil simplu pentru animația de rotație folosind CSS in JS
const style = document.createElement("style");
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.append(style);

export default Loader;
