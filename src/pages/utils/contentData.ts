import IMG1 from '../../assets/image1.jpg';
import IMG2 from '../../assets/image2.jpg';
import IMG3 from '../../assets/image3.jpg';
import IMG4 from '../../assets/image4.jpg';

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
];
