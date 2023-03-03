function Container ({ children }) {
    return(
        <div className="container" style={{ display: "flex", alignItems:"center" }}>
            { children }
        </div>
    );
}

export default Container