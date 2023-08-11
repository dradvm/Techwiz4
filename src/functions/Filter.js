import productListData from './../data/plant_data.json';
import tagIndex from './../data/indexers/tags_indexers.json';
let tagList = Object.keys(tagIndex).sort((a, b) => (tagIndex[b].length - tagIndex[a].length)).filter((item, index) => index < 13);
let productList = Object.values(productListData);
function productFilter(criterias)
{
    if (criterias.length === 0)
    {
        return productList; 
    }
    let res = productList.filter((item, index) =>
    {
        let check = true;
        criterias.forEach((cat) =>
        {
            if (!check)
            {
                return;
            }
            if (!tagIndex[cat].includes(index))
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
export {productList, tagList};