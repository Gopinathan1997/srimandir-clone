import './index.css'


const PujaItems = () =>{
  const data = [
    {
      imageLink:
        "http://srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720883338524.webp&w=1920&q=75",
      title: "Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek",
      goods: "For Prevention of Misfortunes and Adversities",
      special: "SATURDAY SHANI SHINGNAPUR SPECIAL",
      location: "Shree Shanidev Temple, Shani Sjingnapur, Maharastra",
      time: "20 July, Saturady, Ashada Shukla Chaturdashi",
    },
    {
      imageLink:
        "http://srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1721208690418.jpg&w=750&q=75",
      title: "Maa Bagalamukhi Tantra Yukta Havan",
      goods: "For Victory in coyrt cases and Victory over enemies",
      special: "MAHAVIDYA PURNIMA SPECIAL",
      location: "Maa Bagalamukhi Temple, Haridwar, Uttarkhand",
      time: "21 July, Sunday, Ashada Shukla Chaturdashi",
    },
    {
      imageLink:
        "http://srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720890969814.webp&w=750&q=75",
      title: "Divya Mahakali Tantrokta Havan",
      goods: "For Courage and Protection from Obstacles",
      special: "PURNIMA SHAKTIPEETH NIGHT SPECIAL",
      location: "Shaktipeeth Maa Tarapith Temple, Birbhum, West Bengal",
      time: "20 July, Saturday, Ashada Shukla Purnima(From 05:59 Pm, JULY 20 to 03:46 PM, JULY 21)",
    },
  ];
  return(
    <div>
      <ul className="puja-list-container">
      {data.map((each) => (
          <li key={each.title} className="puja-list-item">
            <img className="puja-list-image" alt={each.title} src={each.imageLink} />
            <h3>{each.special}</h3>
            <hr />
            <h1>{each.title}</h1>
            <p>{each.goods}</p>
            <p>{each.location}</p>
            <p>{each.time}</p>
          <button className='participate'>Participate -></button>
          </li>

        ))}
      </ul>
    </div>
  )
}
export default PujaItems;