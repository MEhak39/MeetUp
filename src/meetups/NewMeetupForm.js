import "./NewMeetupForm.css";

function NewMeetupForm(){
    return <Card>
        <form className="form">
            <div className="control">
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title"/>
            </div>


        </form>
    </Card>
}
export default NewMeetupForm;