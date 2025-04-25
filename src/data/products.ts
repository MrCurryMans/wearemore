
export const products = [
  {
    id: 'usb-holder-keyring',
    name: 'USB Holder Keyring',
    image: '/lovable-uploads/78064ec7-85d8-4681-8269-1cc5b40fca8d.png',
    price: '£15.00',
    category: 'accessories',
    description: 'A stylish keyring that doubles as a USB holder, perfect for keeping your important data close at hand. Made from recycled computer components.'
  },
  {
    id: 'wired-bracelet',
    name: 'Wired Bracelet',
    image: '/lovable-uploads/95c4e7b6-797c-4eb4-9e12-010be4208dbe.png',
    price: '£15.00',
    category: 'jewelry',
    description: 'Handcrafted bracelet made from repurposed computer wiring, featuring intricate patterns and a unique tech-inspired design.'
  },
  {
    id: 'connected-coaster',
    name: 'Connected Coaster',
    image: 'https://oqaobnkcgfdqkxvaltki.supabase.co/storage/v1/object/sign/websiteimg/circuitboardcoaster.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzI4N2M5NTExLTQzODUtNDI2NS1iYzhiLTEwZDRlZGVjNzAxZiJ9.eyJ1cmwiOiJ3ZWJzaXRlaW1nL2NpcmN1aXRib2FyZGNvYXN0ZXIuanBnIiwiaWF0IjoxNzQ1NTk0ODU1LCJleHAiOjQ4OTkxOTQ4NTV9.XKRMyv5O4iS4N5C9GciCjRzp28tqTo3tFps2jsXQtiQ',
    price: '£15.00',
    category: 'homeware',
    description: 'Protect your surfaces with style using these unique coasters made from recycled circuit boards. Each piece tells its own technological story.'
  },
  {
    id: 'circuit-pendant',
    name: 'Circuit Pendant',
    image: '/lovable-uploads/a82d605d-b82a-4037-8e7c-497ad6627d04.png',
    price: '£18.00',
    category: 'jewelry',
    description: 'A stunning pendant necklace featuring real circuit board components, perfectly preserved in clear resin for a modern tech-inspired look.'
  },
  {
    id: 'cpu-display-box',
    name: 'CPU Display Box',
    image: '/lovable-uploads/1d2bbc38-a7bd-44a8-9700-e7166a07da87.png',
    price: '£25.00',
    category: 'homeware',
    description: 'A decorative display box crafted from vintage CPU components. Perfect for storing small items while showcasing computing history.'
  },
  {
    id: 'memory-keychain',
    name: 'Memory Keychain',
    image: '/lovable-uploads/59733e39-ad50-4c6e-92b8-eba0b80f6bd7.png',
    price: '£12.00',
    category: 'accessories',
    description: 'Keep your keys organized with this unique keychain made from upcycled RAM modules, featuring authentic computer memory chips.'
  },
  {
    id: 'circuit-coaster-set',
    name: 'Circuit Coaster Set',
    image: '/lovable-uploads/5b829018-de56-4db5-8380-298324c11e53.png',
    price: '£28.00',
    category: 'homeware',
    description: 'Set of 4 coasters made from genuine circuit boards, each featuring unique patterns and components. Perfect for the tech enthusiast.'
  },
  {
    id: 'optical-earrings',
    name: 'Optical Earrings',
    image: '/lovable-uploads/a83b49aa-7479-44af-98f4-4d2a39e38ce0.png',
    price: '£22.00',
    category: 'jewelry',
    description: 'Elegant earrings crafted from recycled optical drive components, featuring reflective surfaces that catch and play with light.'
  },
  {
    id: 'ex1',
    name: 'Example Product 1',
    image: '/lovable-uploads/photo-1721322800607-8c38375eef04',
    price: '£199.99',
    category: 'furniture',
    contactOnly: true,
    description: 'A unique piece of furniture that incorporates recycled computer parts into its modern design. Contact us for custom specifications and details.'
  },
  {
    id: 'ex2',
    name: 'Example Product 2',
    image: '/lovable-uploads/photo-1472396961693-142e6e269027',
    price: '£299.99',
    category: 'furniture',
    contactOnly: true,
    description: 'Custom-made furniture piece featuring integrated tech components. Each piece is unique and made to order. Contact us to discuss your requirements.'
  },
  {
    id: 'ex3',
    name: 'Example Product 3',
    image: '/lovable-uploads/photo-1582562124811-c09040d0a901',
    price: '£149.99',
    category: 'furniture',
    description: 'Contemporary furniture design incorporating vintage computer elements. A perfect blend of technology and modern home decor.'
  },
  {
    id: 'ex4',
    name: 'Example Product 4',
    image: '/lovable-uploads/photo-1582562124811-c09040d0a901',
    price: '£399.99',
    category: 'furniture',
    description: 'Statement furniture piece featuring recycled tech components in its design. Perfect for creating a unique focal point in any room.'
  }
];

export const featuredProducts = products.slice(0, 3);

export const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'jewelry', name: 'Jewelry' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'homeware', name: 'Homeware' },
  { id: 'furniture', name: 'Furniture/Decor' }
];
