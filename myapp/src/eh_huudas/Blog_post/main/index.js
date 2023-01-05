const blogDetail = [
  {
    h: "h1",
    title: "BLOG DETAILS H1",
    content:
      "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
  },
  {
    h: "h2",
    title: "BLOG DETAILS H2",
    content: `Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally, many UX design blogs expose you to case studies detailing an app or \n \n web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.`,
  },
  {
    h: "h3",
    title: "BLOG DETAILS H3",
    content:
      "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.",
  },
];

var Main = () => {
  return (
    <div className="container">
      {blogDetail.map((i) => (
        <div>
          <h1 className={i.h}>{i.title}</h1>
          <br></br>
          <br></br>
          <p>{i.content}</p>
          <br></br>
          <br></br>
          <br></br>
        </div>
      ))}
      <p></p>
    </div>
  );
};

export default Main;
