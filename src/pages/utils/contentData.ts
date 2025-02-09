import IMG1 from '../../assets/image1.jpg';
import IMG2 from '../../assets/image2.jpg';
import IMG3 from '../../assets/image3.jpg';
import IMG4 from '../../assets/image4.jpg';
import Robo1 from '../../assets/hotel1.jpeg';
import Robo2 from '../../assets/hotel_robo.jpg';
import Robo3 from '../../assets/hotel_robo4.jpg';
import Robo4 from '../../assets/hotel_robo5.jpg';
import Gra from '../../assets/grace_lodge.jpg';
import Gra2 from '../../assets/grace_lodge1.jpg';
import Gra3 from '../../assets/grace_lodge2.jpg';
import Gra4 from '../../assets/grace_lodge3.jpg';
import Gra5 from '../../assets/grace_lodge4.jpg';
import ilo1 from '../../assets/ilo1.jpg';
import ilo2 from '../../assets/ilo2.jpg';
import ilo3 from '../../assets/ilo3.jpg';
import ilo4 from '../../assets/ilo4.jpg';
import ilo5 from '../../assets/ilo5.jpg';
import event1 from '../../assets/event1.jpg';
import event2 from '../../assets/event2.jpg';
import event3 from '../../assets/event3.jpg';
import event4 from '../../assets/event4.jpg';
import event5 from '../../assets/event5.jpg';




interface DesignItem {
    Id: number;
    image: string; 
    title: string;
    desc: string;
    client: string;
    location: string;
    building: string;
    addImage: string[]
}

interface BuildingItem {
    Id: number;
    image: string; 
    title: string;
    desc: string;
    client: string;
    location: string;
    building: string;
    addImage: string[]
}

export const DesignData: DesignItem[] = [
    {
        Id: 1,
        image: IMG1, // Ensure this is the correct type (string or image module)
        title: 'Rebot Hotel Design',
        desc: 'Engineering, Procurement, Construction, and Commissioning works for 72 Type 3 Housing Units',
        client: 'Rebot Group',
        location: 'Centinary City, Enugu',
        building: 'Public Building',
        addImage: [IMG1, IMG1, IMG1, IMG1],
    },
    {
        Id: 2,
        image: IMG2, // Ensure this is the correct type (string or image module)
        title: 'Chief Ilo House',
        desc: 'Engineering, Procurement, Construction, and Commissioning works for 72 Type 3 Housing Units',
        client: 'Chief Ilo',
        location: 'Centinary City, Enugu',
        building: 'Residental Building',
        addImage: [IMG1, IMG1, IMG1, IMG1],
    },
    {
        Id: 3,
        image: IMG3, // Ensure this is the correct type (string or image module)
        title: 'City Hall Event Center',
        desc: 'Engineering, Procurement, Construction, and Commissioning works for 72 Type 3 Housing Units',
        client: 'Hon Dan Igwe',
        location: 'Centinary City, Enugu',
        building: 'Public Building',
        addImage: [IMG1, IMG1, IMG1, IMG1],
    },
    {
        Id: 4,
        image: IMG4, // Ensure this is the correct type (string or image module)
        title: 'Grace Lodge',
        desc: 'Engineering, Procurement, Construction, and Commissioning works for 72 Type 3 Housing Units',
        client: 'Barrister John',
        location: 'Unizik, Awka',
        building: 'Residental Building',
        addImage: [IMG1, IMG1, IMG1, IMG1],
    },
    {
        Id: 5,
        image: IMG4, // Ensure this is the correct type (string or image module)
        title: 'Grace Lodge',
        desc: 'Engineering, Procurement, Construction, and Commissioning works for 72 Type 3 Housing Units',
        client: 'Barrister John',
        location: 'Unizik, Awka',
        building: 'Residental Building',
        addImage: [IMG1, IMG1, IMG1, IMG1],
    },
    {
        Id: 6,
        image: IMG4, // Ensure this is the correct type (string or image module)
        title: 'Grace Lodge',
        desc: 'Engineering, Procurement, Construction, and Commissioning works for 72 Type 3 Housing Units',
        client: 'Barrister John',
        location: 'Unizik, Awka',
        building: 'Residental Building',
        addImage: [IMG1, IMG1, IMG1, IMG1],
    },
    {
        Id: 7,
        image: IMG4, // Ensure this is the correct type (string or image module)
        title: 'Grace Lodge',
        desc: 'Engineering, Procurement, Construction, and Commissioning works for 72 Type 3 Housing Units',
        client: 'Barrister John',
        location: 'Unizik, Awka',
        building: 'Residental Building',
        addImage: [IMG1, IMG1, IMG1, IMG1],
    },
];

export const BuildingData: BuildingItem[] = [
    {
        Id: 1,
        image: Robo1, // Ensure this is the correct type (string or image module)
        title: 'Rebot Hotel Design',
        desc: 'Engineering, Procurement, Construction, and Commissioning works for 72 Type 3 Housing Units',
        client: 'Rebot Group',
        location: 'Centinary City, Enugu',
        building: 'Public Building',
        addImage: [Robo2, Robo3, Robo4, Robo1],
    },
    {
        Id: 2,
        image: ilo2, // Ensure this is the correct type (string or image module)
        title: 'Chief Ilo House',
        desc: 'Engineering, Procurement, Construction, and Commissioning works for 72 Type 3 Housing Units',
        client: 'Chief Ilo',
        location: 'Centinary City, Enugu',
        building: 'Residental Building',
        addImage: [ilo1, ilo3, ilo4, ilo5],
    },
    {
        Id: 3,
        image: event1, // Ensure this is the correct type (string or image module)
        title: 'City Hall Event Center',
        desc: 'Engineering, Procurement, Construction, and Commissioning works for 72 Type 3 Housing Units',
        client: 'Hon Dan Igwe',
        location: 'Centinary City, Enugu',
        building: 'Public Building',
        addImage: [event2, event3, event4, event5],
    },
    {
        Id: 4,
        image: Gra, // Ensure this is the correct type (string or image module)
        title: 'Grace Lodge',
        desc: 'Engineering, Procurement, Construction, and Commissioning works for 72 Type 3 Housing Units',
        client: 'Barrister John',
        location: 'Unizik, Awka',
        building: 'Residental Building',
        addImage: [Gra2, Gra3, Gra4, Gra5],
    },
];
