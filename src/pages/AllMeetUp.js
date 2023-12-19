import MeetUpList from "../meetups/MeetUpList";
const DummyData = [
  {
    id: "m1",
    title: "first meet up",
    image: "https://pixabay.com/photos/daughter-child-fun-joy-tree-8318355/",
    address: "Gandhi Nagar, Rohtak",
    description:
      "This is a first, amazing meetup which you definitely should not miss.",
  },
  {
    id: "m2",
    title: "second meet up",
    image:
      "https://en.wikipedia.org/wiki/Chicago#/media/File:Chicago_city_view.jpg",
    description: "This the second meet up that you should pay attention to",
  },
];

function AllMeetUp(){
    return <section>
        <h1>All Meetups</h1>
        <MeetUpList meetups= {DummyData}/>
    </section>
}
export default AllMeetUp;