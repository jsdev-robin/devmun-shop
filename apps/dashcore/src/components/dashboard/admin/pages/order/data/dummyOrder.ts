interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  shippingAddress: Address;
  billingAddress: Address;
}

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export interface Order {
  id: string;
  customer: Customer;
  date: string;
  status: string;
  totalAmount: number;
  paymentMethod: string;
  products: Product[];
}

export const dummyOrders: Order[] = [
  {
    id: 'ORD1001',
    customer: {
      id: 'CUST201',
      firstName: 'James',
      lastName: 'Wilson',
      email: 'james.w@example.com',
      phone: '555-0101',
      shippingAddress: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA',
        postalCode: '02101',
        country: 'USA',
      },
      billingAddress: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA',
        postalCode: '02101',
        country: 'USA',
      },
    },
    date: '2023-06-10',
    status: 'Delivered',
    totalAmount: 299.97,
    paymentMethod: 'Credit Card',
    products: [
      {
        id: 'PROD5001',
        name: 'Smartphone',
        price: 999.99,
        quantity: 1,
        category: 'Electronics',
      },
      {
        id: 'PROD5002',
        name: 'Screen Protector',
        price: 19.99,
        quantity: 2,
        category: 'Accessories',
      },
    ],
  },
  {
    id: 'ORD1002',
    customer: {
      id: 'CUST202',
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.j@example.com',
      phone: '555-0102',
      shippingAddress: {
        street: '456 Oak Ave',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        country: 'USA',
      },
      billingAddress: {
        street: '456 Oak Ave',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        country: 'USA',
      },
    },
    date: '2023-06-12',
    status: 'Processing',
    totalAmount: 149.99,
    paymentMethod: 'PayPal',
    products: [
      {
        id: 'PROD5003',
        name: 'Wireless Earbuds',
        price: 149.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1003',
    customer: {
      id: 'CUST203',
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.b@example.com',
      phone: '555-0103',
      shippingAddress: {
        street: '789 Pine Rd',
        city: 'Austin',
        state: 'TX',
        postalCode: '73301',
        country: 'USA',
      },
      billingAddress: {
        street: '789 Pine Rd',
        city: 'Austin',
        state: 'TX',
        postalCode: '73301',
        country: 'USA',
      },
    },
    date: '2023-06-15',
    status: 'Shipped',
    totalAmount: 89.98,
    paymentMethod: 'Credit Card',
    products: [
      {
        id: 'PROD5004',
        name: 'Bluetooth Speaker',
        price: 89.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1004',
    customer: {
      id: 'CUST204',
      firstName: 'Emily',
      lastName: 'Davis',
      email: 'emily.d@example.com',
      phone: '555-0104',
      shippingAddress: {
        street: '321 Elm St',
        city: 'Miami',
        state: 'FL',
        postalCode: '33101',
        country: 'USA',
      },
      billingAddress: {
        street: '321 Elm St',
        city: 'Miami',
        state: 'FL',
        postalCode: '33101',
        country: 'USA',
      },
    },
    date: '2023-06-18',
    status: 'Pending',
    totalAmount: 199.97,
    paymentMethod: 'Bank Transfer',
    products: [
      {
        id: 'PROD5005',
        name: 'Smart Watch',
        price: 199.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1005',
    customer: {
      id: 'CUST205',
      firstName: 'David',
      lastName: 'Martinez',
      email: 'david.m@example.com',
      phone: '555-0105',
      shippingAddress: {
        street: '654 Maple Ave',
        city: 'Chicago',
        state: 'IL',
        postalCode: '60601',
        country: 'USA',
      },
      billingAddress: {
        street: '654 Maple Ave',
        city: 'Chicago',
        state: 'IL',
        postalCode: '60601',
        country: 'USA',
      },
    },
    date: '2023-06-20',
    status: 'Delivered',
    totalAmount: 129.98,
    paymentMethod: 'Credit Card',
    products: [
      {
        id: 'PROD5006',
        name: 'Laptop Stand',
        price: 39.99,
        quantity: 1,
        category: 'Accessories',
      },
      {
        id: 'PROD5007',
        name: 'Wireless Mouse',
        price: 49.99,
        quantity: 1,
        category: 'Accessories',
      },
      {
        id: 'PROD5008',
        name: 'Keyboard',
        price: 39.99,
        quantity: 1,
        category: 'Accessories',
      },
    ],
  },
  {
    id: 'ORD1006',
    customer: {
      id: 'CUST206',
      firstName: 'Jennifer',
      lastName: 'Garcia',
      email: 'jennifer.g@example.com',
      phone: '555-0106',
      shippingAddress: {
        street: '987 Cedar Ln',
        city: 'Seattle',
        state: 'WA',
        postalCode: '98101',
        country: 'USA',
      },
      billingAddress: {
        street: '987 Cedar Ln',
        city: 'Seattle',
        state: 'WA',
        postalCode: '98101',
        country: 'USA',
      },
    },
    date: '2023-06-22',
    status: 'Processing',
    totalAmount: 79.99,
    paymentMethod: 'PayPal',
    products: [
      {
        id: 'PROD5009',
        name: 'Tablet Case',
        price: 29.99,
        quantity: 1,
        category: 'Accessories',
      },
      {
        id: 'PROD5010',
        name: 'Stylus Pen',
        price: 49.99,
        quantity: 1,
        category: 'Accessories',
      },
    ],
  },
  {
    id: 'ORD1007',
    customer: {
      id: 'CUST207',
      firstName: 'Robert',
      lastName: 'Taylor',
      email: 'robert.t@example.com',
      phone: '555-0107',
      shippingAddress: {
        street: '159 Oak St',
        city: 'Denver',
        state: 'CO',
        postalCode: '80201',
        country: 'USA',
      },
      billingAddress: {
        street: '159 Oak St',
        city: 'Denver',
        state: 'CO',
        postalCode: '80201',
        country: 'USA',
      },
    },
    date: '2023-06-25',
    status: 'Shipped',
    totalAmount: 249.99,
    paymentMethod: 'Credit Card',
    products: [
      {
        id: 'PROD5011',
        name: 'Noise Cancelling Headphones',
        price: 249.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1008',
    customer: {
      id: 'CUST208',
      firstName: 'Lisa',
      lastName: 'Anderson',
      email: 'lisa.a@example.com',
      phone: '555-0108',
      shippingAddress: {
        street: '753 Pineapple Blvd',
        city: 'Honolulu',
        state: 'HI',
        postalCode: '96801',
        country: 'USA',
      },
      billingAddress: {
        street: '753 Pineapple Blvd',
        city: 'Honolulu',
        state: 'HI',
        postalCode: '96801',
        country: 'USA',
      },
    },
    date: '2023-06-28',
    status: 'Delivered',
    totalAmount: 179.97,
    paymentMethod: 'Credit Card',
    products: [
      {
        id: 'PROD5012',
        name: 'Fitness Tracker',
        price: 179.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1009',
    customer: {
      id: 'CUST209',
      firstName: 'Thomas',
      lastName: 'Jackson',
      email: 'thomas.j@example.com',
      phone: '555-0109',
      shippingAddress: {
        street: '852 Palm St',
        city: 'San Diego',
        state: 'CA',
        postalCode: '92101',
        country: 'USA',
      },
      billingAddress: {
        street: '852 Palm St',
        city: 'San Diego',
        state: 'CA',
        postalCode: '92101',
        country: 'USA',
      },
    },
    date: '2023-07-01',
    status: 'Pending',
    totalAmount: 59.99,
    paymentMethod: 'PayPal',
    products: [
      {
        id: 'PROD5013',
        name: 'Portable Charger',
        price: 59.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1010',
    customer: {
      id: 'CUST210',
      firstName: 'Patricia',
      lastName: 'White',
      email: 'patricia.w@example.com',
      phone: '555-0110',
      shippingAddress: {
        street: '369 Beach Ave',
        city: 'Los Angeles',
        state: 'CA',
        postalCode: '90001',
        country: 'USA',
      },
      billingAddress: {
        street: '369 Beach Ave',
        city: 'Los Angeles',
        state: 'CA',
        postalCode: '90001',
        country: 'USA',
      },
    },
    date: '2023-07-05',
    status: 'Processing',
    totalAmount: 399.99,
    paymentMethod: 'Bank Transfer',
    products: [
      {
        id: 'PROD5014',
        name: 'Gaming Console',
        price: 399.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1011',
    customer: {
      id: 'CUST211',
      firstName: 'Christopher',
      lastName: 'Lee',
      email: 'chris.l@example.com',
      phone: '555-0111',
      shippingAddress: {
        street: '147 Tech Park',
        city: 'San Francisco',
        state: 'CA',
        postalCode: '94101',
        country: 'USA',
      },
      billingAddress: {
        street: '147 Tech Park',
        city: 'San Francisco',
        state: 'CA',
        postalCode: '94101',
        country: 'USA',
      },
    },
    date: '2023-07-08',
    status: 'Shipped',
    totalAmount: 129.99,
    paymentMethod: 'Credit Card',
    products: [
      {
        id: 'PROD5015',
        name: 'External SSD',
        price: 129.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1012',
    customer: {
      id: 'CUST212',
      firstName: 'Jessica',
      lastName: 'Harris',
      email: 'jessica.h@example.com',
      phone: '555-0112',
      shippingAddress: {
        street: '258 River Rd',
        city: 'Portland',
        state: 'OR',
        postalCode: '97201',
        country: 'USA',
      },
      billingAddress: {
        street: '258 River Rd',
        city: 'Portland',
        state: 'OR',
        postalCode: '97201',
        country: 'USA',
      },
    },
    date: '2023-07-10',
    status: 'Delivered',
    totalAmount: 89.98,
    paymentMethod: 'PayPal',
    products: [
      {
        id: 'PROD5016',
        name: 'Webcam',
        price: 89.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1013',
    customer: {
      id: 'CUST213',
      firstName: 'Daniel',
      lastName: 'Clark',
      email: 'daniel.c@example.com',
      phone: '555-0113',
      shippingAddress: {
        street: '369 Mountain View',
        city: 'Phoenix',
        state: 'AZ',
        postalCode: '85001',
        country: 'USA',
      },
      billingAddress: {
        street: '369 Mountain View',
        city: 'Phoenix',
        state: 'AZ',
        postalCode: '85001',
        country: 'USA',
      },
    },
    date: '2023-07-12',
    status: 'Processing',
    totalAmount: 199.98,
    paymentMethod: 'Credit Card',
    products: [
      {
        id: 'PROD5017',
        name: 'Monitor',
        price: 199.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1014',
    customer: {
      id: 'CUST214',
      firstName: 'Michelle',
      lastName: 'Lewis',
      email: 'michelle.l@example.com',
      phone: '555-0114',
      shippingAddress: {
        street: '753 Desert Blvd',
        city: 'Las Vegas',
        state: 'NV',
        postalCode: '89101',
        country: 'USA',
      },
      billingAddress: {
        street: '753 Desert Blvd',
        city: 'Las Vegas',
        state: 'NV',
        postalCode: '89101',
        country: 'USA',
      },
    },
    date: '2023-07-15',
    status: 'Pending',
    totalAmount: 49.99,
    paymentMethod: 'PayPal',
    products: [
      {
        id: 'PROD5018',
        name: 'USB Hub',
        price: 29.99,
        quantity: 1,
        category: 'Accessories',
      },
      {
        id: 'PROD5019',
        name: 'HDMI Cable',
        price: 19.99,
        quantity: 1,
        category: 'Accessories',
      },
    ],
  },
  {
    id: 'ORD1015',
    customer: {
      id: 'CUST215',
      firstName: 'Matthew',
      lastName: 'Walker',
      email: 'matthew.w@example.com',
      phone: '555-0115',
      shippingAddress: {
        street: '159 Lake View',
        city: 'Salt Lake City',
        state: 'UT',
        postalCode: '84101',
        country: 'USA',
      },
      billingAddress: {
        street: '159 Lake View',
        city: 'Salt Lake City',
        state: 'UT',
        postalCode: '84101',
        country: 'USA',
      },
    },
    date: '2023-07-18',
    status: 'Shipped',
    totalAmount: 179.99,
    paymentMethod: 'Credit Card',
    products: [
      {
        id: 'PROD5020',
        name: 'Wireless Keyboard',
        price: 79.99,
        quantity: 1,
        category: 'Accessories',
      },
      {
        id: 'PROD5021',
        name: 'Wireless Mouse',
        price: 49.99,
        quantity: 1,
        category: 'Accessories',
      },
      {
        id: 'PROD5022',
        name: 'Mouse Pad',
        price: 19.99,
        quantity: 1,
        category: 'Accessories',
      },
    ],
  },
  {
    id: 'ORD1016',
    customer: {
      id: 'CUST216',
      firstName: 'Amanda',
      lastName: 'Hall',
      email: 'amanda.h@example.com',
      phone: '555-0116',
      shippingAddress: {
        street: '852 Valley Rd',
        city: 'Dallas',
        state: 'TX',
        postalCode: '75201',
        country: 'USA',
      },
      billingAddress: {
        street: '852 Valley Rd',
        city: 'Dallas',
        state: 'TX',
        postalCode: '75201',
        country: 'USA',
      },
    },
    date: '2023-07-20',
    status: 'Delivered',
    totalAmount: 349.99,
    paymentMethod: 'Bank Transfer',
    products: [
      {
        id: 'PROD5023',
        name: 'Drone',
        price: 349.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1017',
    customer: {
      id: 'CUST217',
      firstName: 'Kevin',
      lastName: 'Allen',
      email: 'kevin.a@example.com',
      phone: '555-0117',
      shippingAddress: {
        street: '963 Hilltop Ave',
        city: 'Atlanta',
        state: 'GA',
        postalCode: '30301',
        country: 'USA',
      },
      billingAddress: {
        street: '963 Hilltop Ave',
        city: 'Atlanta',
        state: 'GA',
        postalCode: '30301',
        country: 'USA',
      },
    },
    date: '2023-07-22',
    status: 'Processing',
    totalAmount: 99.99,
    paymentMethod: 'Credit Card',
    products: [
      {
        id: 'PROD5024',
        name: 'Action Camera',
        price: 99.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1018',
    customer: {
      id: 'CUST218',
      firstName: 'Stephanie',
      lastName: 'Young',
      email: 'stephanie.y@example.com',
      phone: '555-0118',
      shippingAddress: {
        street: '741 Ocean Dr',
        city: 'Miami Beach',
        state: 'FL',
        postalCode: '33139',
        country: 'USA',
      },
      billingAddress: {
        street: '741 Ocean Dr',
        city: 'Miami Beach',
        state: 'FL',
        postalCode: '33139',
        country: 'USA',
      },
    },
    date: '2023-07-25',
    status: 'Pending',
    totalAmount: 199.99,
    paymentMethod: 'PayPal',
    products: [
      {
        id: 'PROD5025',
        name: 'Smart Home Speaker',
        price: 199.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1019',
    customer: {
      id: 'CUST219',
      firstName: 'Andrew',
      lastName: 'King',
      email: 'andrew.k@example.com',
      phone: '555-0119',
      shippingAddress: {
        street: '852 Forest Ln',
        city: 'Seattle',
        state: 'WA',
        postalCode: '98101',
        country: 'USA',
      },
      billingAddress: {
        street: '852 Forest Ln',
        city: 'Seattle',
        state: 'WA',
        postalCode: '98101',
        country: 'USA',
      },
    },
    date: '2023-07-28',
    status: 'Shipped',
    totalAmount: 149.99,
    paymentMethod: 'Credit Card',
    products: [
      {
        id: 'PROD5026',
        name: 'E-Reader',
        price: 149.99,
        quantity: 1,
        category: 'Electronics',
      },
    ],
  },
  {
    id: 'ORD1020',
    customer: {
      id: 'CUST220',
      firstName: 'Laura',
      lastName: 'Scott',
      email: 'laura.s@example.com',
      phone: '555-0120',
      shippingAddress: {
        street: '963 Sunset Blvd',
        city: 'Los Angeles',
        state: 'CA',
        postalCode: '90001',
        country: 'USA',
      },
      billingAddress: {
        street: '963 Sunset Blvd',
        city: 'Los Angeles',
        state: 'CA',
        postalCode: '90001',
        country: 'USA',
      },
    },
    date: '2023-07-30',
    status: 'Delivered',
    totalAmount: 79.99,
    paymentMethod: 'PayPal',
    products: [
      {
        id: 'PROD5027',
        name: 'Wireless Charger',
        price: 39.99,
        quantity: 2,
        category: 'Accessories',
      },
    ],
  },
];
