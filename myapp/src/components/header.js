import '../all.module.css/header.css';

const menu = ["portfolia", "BLOG", "CV", "store", "freelance", "about me", "contract" ];
const socialBtn = [
    {classNer:"twitter",
     ner:"TWITTER"
    },
    {classNer:"linkedIn",
     ner:"LINKEDIN"
    },
    {classNer:"medium",
     ner:"MEDIUM"
    },
];

const Header = () => {
    return(
        <div className='container'>
            <nav>
                <div className='image'>
                    <img src="/images/Leaplogo.svg" alt="" />
                    <img src="/images/Hire-Me.svg" alt="" />
                </div>
                <div className='navR'>
                    <ul>
                        {
                            menu.map((i) => (
                                <li> <button>{i}</button> </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
            <div className='headerBottom'>
                <div className='BottomLeft'>
                    <h1>Blog Posts</h1>
                    <h2>I think so, this is it. </h2>
                    <p>Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
                    <div className='social'>
                        {
                            socialBtn.map((i) =>(
                                <button className={i.classNer}>{i.ner}</button>
                            ))
                        }
                    </div>
                </div>
                <div className='BottomRight'>
                    <img src="/images/BottomR.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;