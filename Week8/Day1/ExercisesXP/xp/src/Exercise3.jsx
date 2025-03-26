import './Exercise.css'
import pic from './assets/React.jpg'
const Exercise = () => {
    console.log()
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return(
        <div style={{textAlign:'center'}}>
            <h1 style={style_header}>This is a header </h1>
            <p class="para">This is a paragraph</p>
            <a href="#">This is a Link</a>
            <h1>This is a form</h1>
            <form>
                <label>Enter your name:</label><br></br>
                <input type='text' name="text"/>
            </form>
            <h5>Here is an image:</h5>
            <img style={{width:'700px',height:'500px'}} src={pic} alt="descr"/>
            <h6>This is a list</h6>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>

        </div>
   )
}

export default Exercise