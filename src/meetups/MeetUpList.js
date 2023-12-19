import MeetUpItems from "./MeetUpItems";
import "./MeetUpList.css";
import myImage from '../pages/Img1.jpg';
function MeetUpList(props) {
  return (
    <ul className="list">
      {props.meetups.map((meetup) => (
        <MeetUpItems 
            key={meetup.id}
            id= {meetup.id}
            image = {myImage}
            title = {meetup.title}
            address = {meetup.address}
            description={meetup.description}/>
      ))}
    </ul>
  );
}
export default MeetUpList;
