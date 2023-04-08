import { useEffect, useState } from "react";
const Gallery = () => {

    const [showMore, setShowMore] = useState(false);
    const [index, setIndex] = useState(0);
    const [sculpture, setSculpture] = useState([
        {
            named: "",
            artist: "",
            description: "",
            url: "",
            alt: ""
        },
    ]);

    const fetchData = async () => {
        try {
            const response = await fetch("sculptures.json");
            const json = await response.json();
            console.log(json);
            setSculpture(json);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    function handleClickNext() {
        if (index === sculpture.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function handleClickPrevious() {
        if (index === 0) {
            setIndex(sculpture.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }


    function handleShowHideDescription() {

        setShowMore(!showMore);
    }


    return (

        <div>
            <button onClick={handleClickPrevious}>Previous</button>
            <button onClick={handleClickNext}>Next</button>

            <button onClick={handleShowHideDescription}>
                {showMore ? 'Hide' : 'Show'} details
            </button>

            <div>
                <h2>
                    <i>{sculpture[index].named} </i>
                    by {sculpture[index].artist}
                </h2>
                <h3>
                    ({index + 1} of {sculpture.length})
                </h3>
                <img src={sculpture[index].url} alt={sculpture[index].alt} />
                {showMore && <p>{sculpture[index].description}</p>}
            </div>
        </div>
    );


};

export default Gallery;