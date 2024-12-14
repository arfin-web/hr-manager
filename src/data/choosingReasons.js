const { BoltIcon, ScaleIcon, Edit3 } = require("lucide-react");

const choosingReasons = [
    {
        id: 1,
        title: "Blazing Fast Performance",
        description: "Our platform is built on the latest technology, ensuring lightning-fast load times",
        icon: <BoltIcon className="w-6 h-6 text-primary" />
    },
    {
        id: 2,
        title: "Customizable Features",
        description: "Tailor your application to meet your specific needs with our flexible features.",
        icon: <Edit3 className="w-6 h-6 text-primary" />
    },
    {
        id: 3,
        title: "Scalable Solution",
        description: "Easily scale your application to meet changing demands with our cloud-based infrastructure.",
        icon: <ScaleIcon className="w-6 h-6 text-primary" />
    }
]

export default choosingReasons