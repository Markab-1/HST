
import {Route, Routes} from 'react-router-dom';

import Layout from './Layout/Layout';
import HomeDescription from './HomeDescription/HomeDescription';
import Team from './Team/Team';
import Products from './Products/Products';
import Publications from './Publications/Publications';

export const App = () => {
  return (
<div style={{ minWidth: "100vw" }}>
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<HomeDescription/>}/>
    <Route path="team" element={<Team/>}/>
    <Route path="products" element={<Products/>}/>
    <Route path="publications" element={<Publications/>}/>
  </Route>
</Routes>
</div>
  );
};
