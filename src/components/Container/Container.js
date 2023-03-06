function Container ({ children, additionalClassNames=[] }) {
    const classNamesString = additionalClassNames.join(" "); //Additional classNames

    return(
        <div className={ `container ${classNamesString}` }>
            { children }
        </div>
    );
}

export default Container