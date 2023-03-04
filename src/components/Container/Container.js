function Container ({ children, additionalClassNames=[] }) {
    const classNamesString = additionalClassNames.join(" "); //Additional classNames

    return(
        <div className={ `container ${classNamesString}` } style={{ display: "flex", alignItems:"center" }}>
            { children }
        </div>
    );
}

export default Container