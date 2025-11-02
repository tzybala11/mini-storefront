export async function GET() {
    const products = [
        { id: 'SKU-001', name: 'HighEndDesktop', price: 1500, category: 'desktop', stock: 5},
        { id: 'SKU-002', name: 'LowEndLaptop', price: 400, category: 'laptop', stock: 24},
        { id: 'SKU-003', name: 'Keyboard', price: 85, category: 'electronics', stock: 20},
        { id: 'SKU-004', name: 'Headphones', price: 140, category: 'electronics', stock: 34},
        { id: 'SKU-005', name: 'MidTierLaptop', price: 800, category: 'laptop', stock: 15},
        { id: 'SKU-006', name: 'HighEndLaptop', price: 1200, category: 'laptop', stock: 9},
        { id: 'SKU-007', name: 'MidTierDesktop', price: 1000, category: 'desktop', stock: 8},
        { id: 'SKU-008', name: 'LowEndDesktop', price: 500, category: 'desktop', stock: 12},
    ];
    return Response.json(products);
}