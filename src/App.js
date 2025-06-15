import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './my_theme'; // Import your custom MUI theme
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BlogsAndNews from './pages/Blogs_and_News';
import ContactUs from './pages/ContactUs';
import Product from './pages/Products';
import ProductDetail from './pages/Product_detail'; // Import the ProductDetail component
import NewsDetail from './pages/News_detail';
import SparePart from './pages/Spare_part'; // Import the SparePart component

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog-and-news" element={<BlogsAndNews />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products" element={<Product />} />
          <Route path="/spareparts" element={<SparePart />} />

          <Route path="/product-detail/:id" element={<ProductDetail />} /> {/* Route for product detail */}
          <Route path="/blog-and-news/:id" element={<NewsDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
