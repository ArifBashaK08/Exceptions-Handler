import { createContext } from "react"
import { PropTypes } from "prop-types"
import { FaRegHospital, FaTruck, FaUmbrella } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoLocationSharp, IoMail, IoCallSharp } from "react-icons/io5";
import { MdOutlineFactory, MdOutlineRealEstateAgent } from "react-icons/md";
import { GiTakeMyMoney, GiBank } from "react-icons/gi";

export const ContextData = createContext()

export const ContextDataProvider = ({ children }) => {
    const navigationPages = [
        { path: "/", page: "Home" },
        { path: "/about", page: "About" },
        { path: "/services", page: "Services" },
        { path: "/works", page: "Works" },
        { path: "/products", page: "Products" },
        { path: "/contact", page: "Contact" },
    ];

    const servicesDetails = [
        {
            url: '/contact',
            img: "/development.png",
            service: "Web Development",
            content: "The best and SEO friendly from the world of web design and development, is what you will be offered by GWP, the best web design company in Nagpur. Thanks to our team of professional and creative developers and designers. GWP, the premium website design and mobile app development company in Nagpur, with the help of its dedicated android mobile app development service."
        },
        {
            url: "/contact",
            img: "/smartphone.png",
            service: "App Development",
            content: "A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch. Mobile applications often stand in contrast to desktop applications which are designed to run on desktop computers, and web applications which run in mobile web browsers rather than directly on the mobile device."
        },
        {
            url: "/contact",
            img: "/interior.png",
            service: "Interior Design",
            content: "Interior design services involve creating functional and stylish spaces by designing layouts, selecting furnishings, and choosing color schemes. Designers enhance comfort and visual appeal for residential, commercial, or public areas, managing the entire design process to meet client needs and preferences."
        },
        {
            url: "/contact",
            img: "/ui-ux.png",
            service: "UI/UX Design",
            content: "UI/UX Design is about making products intuitive and engaging. We focus on creating interfaces that are not only visually appealing but also user-friendly, leading to a seamless and enjoyable experience for your customers."
        },
        {
            url: "/contact",
            img: "/video-audio.png",
            service: "Video & Image Editing Services",
            content: "We offer professional video and image editing services. Our team of skilled editors can enhance your footage and images, creating visually stunning and engaging content. We specialize in color correction, special effects, and video assembly, tailoring our services to meet your unique needs."
        },
        {
            url: "/contact",
            img: "/marketing.png",
            service: "Digital Marketing",
            content: "Digital marketing is a form of marketing that uses digital channels to reach and engage customers. Some popular channels include search engines, social media, email, and websites. Effective digital marketing strategies can help businesses generate leads, drive sales, and build brand awareness."
        },
    ]

    const featureDetails = [
        {
            img: "/featurePngs/seo.png",
            service: "Search Engine Optimization",
            content: "It is time to stand out and stay above millions of active websites available on the internet. Exception Handlers Online Marketing is an SEO company that can help you make the best use of Search Engine Optimisation."
        },
        {
            img: "/featurePngs/emailMarketing.png",
            service: "Email Marketing",
            content: "The use of email within your marketing efforts to promote a business\’s products and services, as well as incentivize customer loyalty. Email marketing is a form of marketing that can make the customers on your email list aware of new products, discounts, and other services."
        },
        {
            img: "/featurePngs/domainRegistration.png",
            service: "Domain Registration",
            content: "Domain registration service providers, also referred to as domain registrars, help businesses reserve Internet domain names. Domain registration services are used by organizations to process domain name registration and reserve domain names for a set period of time."
        },
    ]

    const designAndDevelopmentServices = ["React Development", "Apps Development", "Laravel Development", "UX/UI Design", "E-commerce Design", "Web Design", "Print Ready Design"]

    const projectsData = [
        {
            title: "Raymond Reality",
            url: "https://newprop.in/",
            image: "/projectsPngs/newprop.png"
        },
        {
            title: "Mahavir Spring",
            url: "https://freshprop.in/",
            image: "/projectsPngs/freshprop.png"
        },
        {
            title: "Tele Communication Billing Inc",
            url: "https://telecommunicationbillinginc.us/",
            image: "/projectsPngs/telecommunications.png"
        },
        {
            title: "Mayarmds",
            url: "https://mayarmds.pages.dev/",
            image: "/projectsPngs/mayarmds.png"
        },
        {
            title: "THE BLACKEGE",
            url: "https://theblackege.com/",
            image: "/projectsPngs/blackege.png"
        },
        {
            title: "Chuchumama",
            url: "https://chuchumama.in/",
            image: "/projectsPngs/chuchumama.png"
        },
    ]

    const testimonialsData = [
        {
            reviewer: "Maker Modular Kitchen",
            review: "“company in Nagpur from last 5 years. After website design they are updating and renew my website time to time.”"
        },
        {
            reviewer: "Vtech Sun Systems",
            review: "“Exception Handlers handle my web designing project in that manner. I do not face any problem in my project and also guide me to Web development project new technique and navigate project in simple manner.”"
        },
        {
            reviewer: "Googulu Academy",
            review: "“I have associated with Exception Handlers from last 4 years. They are giving me all types of web services from website design & development to website promotions (SEO) . I got great experience to associate with them.”"
        }
    ]

    const clients = ["/clients/vtech.jpg", "/clients/logic.jpg", "/clients/maker.png", "/clients/system.png", "/clients/universal.jpg"]

    const soicalMedia = [
        {
            url: 'https://facebook.com',
            icon: <FaFacebookF size={20} />
        },
        {
            url: 'https://x.com',
            icon: <FaXTwitter size={20} />
        },
        {
            url: 'https://instagram.com',
            icon: <FaInstagram size={20} />
        },
        {
            url: 'https://linkedin.com',
            icon: <FaLinkedinIn size={20} />
        },
    ]

    const addresses = [
        {
            id: 1,
            location: "Nagpur",
            details: [
                {
                    icon: <IoLocationSharp />,
                    content: "09, Rachana Heights, Gandhi Nagar, Nagpur-440010, Maharashta, India."
                },
                {
                    icon: <IoMail />,
                    content: "info@exceptionshandler.com"
                },
                {
                    icon: <IoCallSharp />,
                    content: "+91-9823366540, +91-9561966540"
                }]
        },
        {
            id: 2,
            location: "Pune",
            details: [{
                icon: <IoLocationSharp />,
                content: "A-15, Infinity Tower, Vadgaon Sheri, Pune-411014, Maharashta, India."
            },
            {
                icon: <IoMail />,
                content: "info@exceptionshandler.com"
            },
            {
                icon: <IoCallSharp />,
                content: "+91-9823366540, +91-9561966540"
            }]
        },
    ]

    const visionData = [
        {
            image: "/aboutPngs/mission.png",
            title: "Our Mission",
            desc: "GRRAS Solutions Pvt. Ltd. seeks to create and promote implementation of practical learning approach focusing on industry driven content. Our aim is to help professionals across the globe obtain the technical skills they need to strike through excellence in today\’s digital market."
        },
        {
            image: "/aboutPngs/vision.png",
            title: "Our Vision",
            desc: "We have been successful in embarking our presence across the nation and now covet to craft worldwide existence through our placement oriented training program. In the coming future we vision ourselves as an accredited university that provides thorough assured employability to the students."
        },
    ]

    const benefitsData = [
        {
            title: "IT EXPERT AS TRAINERS",
            desc: "Learning various technologies under the supervision of well trained , expereinced and certified trainers of GRRAS"
        },
        {
            title: "FULL HANDS-ON TRAINING",
            desc: "Grras focuses on learning modules with practical examples ,live environment and real time projects"
        },
        {
            title: "TIME FLEXIBILITY",
            desc: "With a team of more than 100 + trainers we can provide any time slot and any option- Weekdays/Weekends as per candidate's choice."
        },
        {
            title: "LAB SUPPORT",
            desc: "High end Infrastructure and labs available to get the exposure with required setups , softwares and hardware machines."
        },
        {
            title: "AFFORDABLE FEES",
            desc: "We aren't cheap , but we provide quality training with justified fees structures."
        },
        {
            title: "AUTHORISED CENTER",
            desc: "We are Authorised centers of RedHat , Pearson VUE and Kryterion which marks GRRAS globally recognised."
        },
    ]

    const industryService = [
        {
            icon: <MdOutlineFactory size={30} />,
            title: "Manufactuiring"
        },
        {
            icon: <FaRegHospital size={30} />,
            title: "Healthcare"
        },
        {
            icon: <FaTruck size={30} />,
            title: "Automobile"
        },
        {
            icon: <GiBank size={30} />,
            title: "Banking"
        },
        {
            icon: <MdOutlineRealEstateAgent size={30} />,
            title: "Real-Estate"
        },
        {
            icon: <FaTruck size={30} />,
            title: "Logistics"
        },
        {
            icon: <FaUmbrella size={30} />,
            title: "Insurance"
        },
        {
            icon: <GiTakeMyMoney size={30} />,
            title: "Capital Market"
        },
    ]

    const productsDetails = [
        {
            img: "/productsPngs/microscope.png",
            service: "Pathology Manager",
            content: "Pathology Manager is developed considering needs of Pathology Laboratories. The main objective of application is to help lab assistents to automate day to day activities and focus on business growth. Manage your business with 20+ reports like GST reports, P&L, Stock & Party Ledger reports."
        },
        {
            img: "/productsPngs/products2.png",
            service: "Transport Manager",
            content: "This is Billing & Accounting Application for Transport agencies.It helps you to manage Vehicle information, Vehicle route information, Fuel filling, etc. Record & track all business transactions such as sales, purchases, quotations, cash & bank transactions, etc."
        },
        {
            img: "/productsPngs/gst.png",
            service: "GST Invoicing/Billing",
            content: "Global Web Package providing a billing software that helps businesses create professional bills & share them with the customers on WhatsApp within a few seconds. Billing software allows customers to do easy GST billing. They can make customised GST bills & print them using regular and thermal printers. There are 10+ GST bill or GST invoice formats available to choose from. With this billing software, businesses can track their sales & purchases accurately."
        },
    ]

    return (
        <ContextData.Provider value={{ navigationPages, featureDetails, servicesDetails, designAndDevelopmentServices, projectsData, testimonialsData, clients, soicalMedia, addresses, visionData, benefitsData, industryService, productsDetails }}>
            {children}
        </ContextData.Provider>
    )
}

ContextDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};