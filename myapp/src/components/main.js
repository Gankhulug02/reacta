import style from '../all.module.css/main.module.css';

const menu =["All", "UI Design", "UX Design", "Product Design", "Articles", "Tutorials", "News"]
const content = [
    {
    imageUrl: '/images/zurag1.png',
    date: 'NOV 23 2020',
    title: 'This way is wrong about UI Design.',
    paragraph: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.',
    button: 'READ MORE'
    },
    {
    imageUrl: '/images/zurag2.png',
    date: 'NOV 23 2020',
    title: 'This way is wrong about UI Design.',
    paragraph: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.',
    button: 'READ MORE'
    },
    {
    imageUrl: '/images/zurag1.png',
    date: 'NOV 23 2020',
    title: 'This way is wrong about UI Design.',
    paragraph: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.',
    button: 'READ MORE'
    },
    {
    imageUrl: '/images/zurag2.png',
    date: 'NOV 23 2020',
    title: 'This way is wrong about UI Design.',
    paragraph: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.',
    button: 'READ MORE'
    },
    {
    imageUrl: '/images/zurag1.png',
    date: 'NOV 23 2020',
    title: 'This way is wrong about UI Design.',
    paragraph: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.',
    button: 'READ MORE'
    },
    {
    imageUrl: '/images/zurag2.png',
    date: 'NOV 23 2020',
    title: 'This way is wrong about UI Design.',
    paragraph: 'A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.',
    button: 'READ MORE'
    },
    
];


const Main = () => {
    return(
        <div className='container'>
          <ul className={style.ul}>
                {
                    menu.map((i) => (
                        <li > <button className={style.button}>{i}</button> </li>
                    ))
                }
            </ul>
                <div className={style.content}>
                {
                    content.map((item) => (
                       <div className={style.items}>
                         <img src={item.imageUrl} alt="zurag" />
                         <p>{item.date}</p>
                         <h3>{item.title}</h3>
                         <p>{item.paragraph}</p>
                       </div>
                        
                    ))
                }
                </div>
        </div>
    )
}

export default Main;