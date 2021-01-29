function LeftBar(props) {
    // console.log(props);
    function getCatData(e) {
        e.preventDefault();
        // var mainId = e.target.getAttribute("id");
        // document.getElementById(mainId).checked = true;
        var getId = e.target.getAttribute("data_id");
        props.catgetId(getId);

    }
    return(
        <div className="leftbar">
            <h3>Category</h3>
            <div>
                {props.items.map((item) =>                
                    <ul key={item} className="links">  
                                      
                        {item.category.map(function (tm) {
                            return(
                                <li key={tm.id} data_id={tm.id} onClick={getCatData}>{tm.title}</li>
                            )  
                        })}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default LeftBar;