export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
export const gridItems = [
    { 
        id: 1,
        title: 'I am very open to client collaboration, open communication is the key to well rounded projects', 
        description: '',
        className:"lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName:"w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        sparreImg: "",
    },
    {
      id: 2,
      title: 'I can easily accomodate different time zones', 
      description: '',
      className:"lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName:"",
      titleClassName: "justify-start",
      img:"",
      spareImg:"",
    },
    { 
        id: 3,
        title: 'My tech stack', 
        description: 'I am constantly learning',
        className:"lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName:"",
        titleClassName: "justify-center",
        img:"",
        spareImg:"",

    },
    { 
        id: 4,
        title: 'Do you want to work together?', 
        description: '',
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName:"",
        titleClassName:"justify-center md:max-w-full max-w-60 text-center",
        img:"",
        spareImg:"",
    },

]

export const projects = [
    {
        id: 1,
        title: "Meal Planning and Grocery Shopping Assistant",
        des: "A web application where users can enter ingredients and be provided with recipes they can make",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "fm.svg"],
        link: "https://recipemaster.pythonanywhere.com"
    },
    {
        id: 2,
        title: "Python Inventory System",
        des: "A Python application where users can manage current inventory, incoming shipments, and users",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/ChezleneCor/CCB_Tech_InventorySystem"
    }        
]

export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    }
]

export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];

export const workExperience = [
{
    id: 1,
    title: "Software Development Intern",
    desc: "Designed a desktop application using Visual Basic that allows users to enter information into the program that once submitted, would populate a Microsoft Word document and an Excel Sheet.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
},
{
    id: 2,
    title: "Freelance Software Developer",
    desc: "Connected with various clients to develop real life projects",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
},

];

export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];
  