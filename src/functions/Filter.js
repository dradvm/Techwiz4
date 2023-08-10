let productList = //test mảng sản phẩm, thay bằng mảng thật import vào
[ 
    {
        categories: ['Seeds', "Planting Essentials"],
        name: 'Elephant ears',
        price: 0
    },
    {
        categories: ["Free Shipping", "Seeds"],
        name: 'Elephant ears',
        price: 1
    },
    {
        categories: ["Planting Essentials", "Free Shipping"],
        name: 'Elephant ears',
        price: 2
    },
    {
        categories: ["Seeds", "Planting Essentials"],
        name: 'Elephant ears',
        price: 3
    },
    {
        categories: ["Free Shipping", "Seeds"],
        name: 'Elephant ears',
        price: 4
    },
    {
        categories: ["Planting Essentials", "Free Shipping"],
        name: 'Elephant ears',
        price: 5
    },
    {
        categories: ["Seeds", "Planting Essentials"],
        name: 'Elephant ears',
        price: 6
    },
    {
        categories: ["Free Shipping", "Seeds"],
        name: 'Elephant ears',
        price: 7
    },
    {
        categories: ["Planting Essentials", "Free Shipping"],
        name: 'Elephant ears',
        price: 8
    }
];
let categoryList = 
[
    "Planting Essentials",
    "Free Shipping",
    "Seeds"
];
function productFilter(criterias)
{
    if (criterias.length === 0)
    {
        return productList;
    }
    let res = productList.filter((item) =>
    {
        let check = true;
        criterias.forEach((cat) =>
        {
            if (!check)
            {
                return;
            }
            if (!item.categories.includes(cat))
            {
                check = false;
            }
        });
        if (check)
        {
            return item;
        }
    });
    return res;
}
export default productFilter;
export {productList, categoryList};