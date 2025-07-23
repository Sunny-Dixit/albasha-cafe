import React, { useRef, useState, useEffect } from 'react';
import {
  FiHome, FiMenu, FiPackage, FiShoppingBag, FiUsers, FiSettings,
  FiBell, FiSearch, FiPlus, FiEdit2, FiTrash2, FiClock,
  FiDollarSign, FiCoffee, FiCheckCircle, FiXCircle, FiChevronDown,
  FiChevronRight, FiAlertCircle, FiX, FiUpload, FiImage
} from 'react-icons/fi';


const API_BASE_URL = "http://localhost:5050"; // Update with your backend URL

const CafeAdminDashboard = () => {
  // State for UI controls
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [expandedOrders, setExpandedOrders] = useState({});

  // Add this function to toggle order visibility
  const toggleOrderExpand = (orderId) => {
    setExpandedOrders(prev => ({
      ...prev,
      [orderId]: !prev[orderId]
    }));
  };


  // Loading and error states
  const [loading, setLoading] = useState({
    categories: false,
    menuItems: false,
    orders: false,
    stats: false,
    images: false
  });
  const [error, setError] = useState({
    categories: null,
    menuItems: null,
    orders: null,
    stats: null,
    images: null
  });

  // Categories state
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState('');

  // Menu Items state
  const [menuItems, setMenuItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discount: 0, // Add discount field with default 0
    categoryId: '',
    imagePath: '',
    available: true
  });
  const [editingMenuItemId, setEditingMenuItemId] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showImageLibrary, setShowImageLibrary] = useState(false);

  // Orders state
  const [orders, setOrders] = useState([]);
  const [orderFilter, setOrderFilter] = useState('all');
  const formRef = useRef(null);


  // Dashboard data
  const [stats, setStats] = useState([
    { name: 'Today\'s Orders', value: 0, change: '+0%', changeType: 'neutral', icon: <FiShoppingBag className="text-blue-500" /> },
    { name: 'Revenue', value: '$0.00', change: '+0%', changeType: 'neutral', icon: <FiDollarSign className="text-green-500" /> },
    { name: 'Active Tables', value: 0, change: '0', changeType: 'neutral', icon: <FiUsers className="text-purple-500" /> },
    { name: 'Popular Item', value: 'None', change: '0x', changeType: 'neutral', icon: <FiCoffee className="text-orange-500" /> }
  ]);

  const [activities, setActivities] = useState([]);

  // API Functions
  // Categories API
  const fetchCategories = async () => {
    setLoading(prev => ({ ...prev, categories: true }));
    setError(prev => ({ ...prev, categories: null }));
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      const formattedCategories = data.map(category => ({
        id: category.id,
        name: category.name,
        items: category.items || 0,
        color: `bg-${['blue', 'purple', 'green', 'pink', 'yellow', 'indigo'][Math.floor(Math.random() * 6)]}-100 text-${['blue', 'purple', 'green', 'pink', 'yellow', 'indigo'][Math.floor(Math.random() * 6)]}-800`
      }));
      setCategories(formattedCategories);
    } catch (err) {
      setError(prev => ({ ...prev, categories: err.message }));
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(prev => ({ ...prev, categories: false }));
    }
  };

  const addCategory = async (categoryName) => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories/admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: categoryName }),
      });
      if (!response.ok) throw new Error('Failed to add category');
      return await response.json();
    } catch (err) {
      throw err;
    }
  };

  const updateCategory = async (id, categoryName) => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories/admin/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: categoryName }),
      });
      if (!response.ok) throw new Error('Failed to update category');
      return await response.json();
    } catch (err) {
      throw err;
    }
  };

  const deleteCategory = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories/admin/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete category');
      return true;
    } catch (err) {
      throw err;
    }
  };

  // Menu Items API
  const fetchMenuItems = async () => {
    setLoading(prev => ({ ...prev, menuItems: true }));
    setError(prev => ({ ...prev, menuItems: null }));
    try {
      const response = await fetch(`${API_BASE_URL}/menu`);
      if (!response.ok) throw new Error('Failed to fetch menu items');
      const data = await response.json();
      setMenuItems(data);
    } catch (err) {
      setError(prev => ({ ...prev, menuItems: err.message }));
      console.error('Error fetching menu items:', err);
    } finally {
      setLoading(prev => ({ ...prev, menuItems: false }));
    }
  };

  const addMenuItem = async (menuItemData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/menu/admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(menuItemData),
      });
      if (!response.ok) throw new Error('Failed to add menu item');
      return await response.json();
    } catch (err) {
      throw err;
    }
  };

  const updateMenuItem = async (id, menuItemData) => {
    try {
      console.log("🔄 Starting updateMenuItem...");
      console.log("➡️ URL:", `${API_BASE_URL}/menu/admin/${id}`);
      console.log("📦 Request Body:", menuItemData);

      const response = await fetch(`${API_BASE_URL}/menu/admin/${id}`, {
        method: 'PATCH', // capitalized correctly
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(menuItemData),
      });

      console.log("📥 Response Status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Server responded with error:", errorText);
        throw new Error('Failed to update menu item');
      }

      const responseData = await response.json();
      console.log("✅ Response Data:", responseData);

      return responseData;
    } catch (err) {
      console.error("🔥 Error in updateMenuItem:", err);
      throw err;
    }
  };

  const deleteMenuItem = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/menu/admin/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete menu item');
      return true;
    } catch (err) {
      throw err;
    }
  };

  const toggleMenuItemAvailability = async (id, available) => {
    try {
      const response = await fetch(`${API_BASE_URL}/menu-items/admin/${id}/availability`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ available }),
      });
      if (!response.ok) throw new Error('Failed to toggle availability');
      return await response.json();
    } catch (err) {
      throw err;
    }
  };

  // Orders API
  const fetchOrders = async () => {
    setLoading(prev => ({ ...prev, orders: true }));
    setError(prev => ({ ...prev, orders: null }));
    try {
      const response = await fetch(`${API_BASE_URL}/orders/admin`);
      if (!response.ok) throw new Error('Failed to fetch orders');
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      setError(prev => ({ ...prev, orders: err.message }));
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(prev => ({ ...prev, orders: false }));
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch(`${API_BASE_URL}/orders/admin/${orderId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) throw new Error('Failed to update order status');
      return await response.json();
    } catch (err) {
      throw err;
    }
  };

  // Dashboard Stats API


  // Image Upload API
  const fetchUploadedImages = async () => {
    setLoading(prev => ({ ...prev, images: true }));
    setError(prev => ({ ...prev, images: null }));
    try {
      const response = await fetch(`${API_BASE_URL}/upload/images`);
      if (!response.ok) throw new Error('Failed to fetch images');
      const data = await response.json();
      setUploadedImages(data);
    } catch (err) {
      setError(prev => ({ ...prev, images: err.message }));
      console.error('Error fetching images:', err);
    } finally {
      setLoading(prev => ({ ...prev, images: false }));
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchCategories();
    fetchMenuItems();
    fetchOrders();
    fetchUploadedImages();
  }, []);

  // Category functions
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategory.trim()) return;

    try {
      const addedCategory = await addCategory(newCategory.trim());
      const newCat = {
        id: addedCategory.id,
        name: addedCategory.name,
        items: 0,
        color: `bg-${['blue', 'purple', 'green', 'pink', 'yellow', 'indigo'][Math.floor(Math.random() * 6)]}-100 text-${['blue', 'purple', 'green', 'pink', 'yellow', 'indigo'][Math.floor(Math.random() * 6)]}-800`
      };
      setCategories([...categories, newCat]);
      setNewCategory('');
    } catch (err) {
      setError(prev => ({ ...prev, categories: 'Failed to add category' }));
      console.error('Error adding category:', err);
    }
  };

  const handleEditCategory = (category) => {
    setEditingCategoryId(category.id);
    setEditCategoryName(category.name);
  };

  const handleUpdateCategory = async (id) => {
    try {
      const updatedCategory = await updateCategory(id, editCategoryName);
      setCategories(categories.map(cat =>
        cat.id === id ? { ...cat, name: updatedCategory.name } : cat
      ));
      setEditingCategoryId(null);
    } catch (err) {
      setError(prev => ({ ...prev, categories: 'Failed to update category' }));
      console.error('Error updating category:', err);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await deleteCategory(id);
      setCategories(categories.filter(cat => cat.id !== id));
    } catch (err) {
      setError(prev => ({ ...prev, categories: 'Failed to delete category' }));
      console.error('Error deleting category:', err);
    }
  };

  // Menu Item functions
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${API_BASE_URL}/upload/image`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const imagePath = await response.text();

      setFormData(prev => ({
        ...prev,
        imagePath: imagePath
      }));

      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      fetchUploadedImages();
    } catch (error) {
      setUploadError('Failed to upload image. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSelectImageFromLibrary = (imagePath) => {
    setFormData(prev => ({
      ...prev,
      imagePath: imagePath
    }));
    setImagePreview(`${API_BASE_URL}${imagePath}`);
    setShowImageLibrary(false);
  };

  const handleAddMenuItem = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.categoryId) return;

    try {
      const selectedCategory = categories.find(cat => cat.id === parseInt(formData.categoryId));

      const menuItemData = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        discount: parseInt(formData.discount) || 0, // Add discount field
        categoryId: parseInt(formData.categoryId),
        imagePath: formData.imagePath,
        available: formData.available
      };

      const newItem = await addMenuItem(menuItemData);

      setMenuItems([...menuItems, {
        ...newItem,
        category: selectedCategory,
        popularity: Math.floor(Math.random() * 50) + 50
      }]);

      resetMenuItemForm();
    } catch (err) {
      setError(prev => ({ ...prev, menuItems: 'Failed to add menu item' }));
      console.error('Error adding menu item:', err);
    }
  };

  const handleEditMenuItem = (item) => {
    setEditingMenuItemId(item.id);
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price?.toString() || "",
      discount: item.discount || 0,
      categoryId: item.category?.id?.toString() || "",
      imagePath: item.imagePath,
      available: item.available
    });

    // ✅ FIX: show full preview using API_BASE_URL
    if (item.imagePath) {
      setImagePreview(`${API_BASE_URL}${item.imagePath}`);
    } else {
      setImagePreview(null);
    }

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); // Small delay to ensure rendering



  };

  const handleUpdateMenuItem = async (e) => {
    e.preventDefault();
    try {
      const selectedCategory = categories.find(cat => cat.id === parseInt(formData.categoryId));

      const menuItemData = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        categoryId: parseInt(formData.categoryId),
        imagePath: formData.imagePath,
        available: formData.available
      };

      const updatedItem = await updateMenuItem(editingMenuItemId, menuItemData);

      setMenuItems(menuItems.map(item =>
        item.id === editingMenuItemId ? {
          ...updatedItem,
          category: selectedCategory,
          popularity: item.popularity
        } : item
      ));

      setEditingMenuItemId(null);
      resetMenuItemForm();
    } catch (err) {
      setError(prev => ({ ...prev, menuItems: 'Failed to update menu item' }));
      console.error('Error updating menu item:', err);
    }
  };

  const handleDeleteMenuItem = async (id) => {
    try {
      await deleteMenuItem(id);
      setMenuItems(menuItems.filter(item => item.id !== id));
    } catch (err) {
      setError(prev => ({ ...prev, menuItems: 'Failed to delete menu item' }));
      console.error('Error deleting menu item:', err);
    }
  };

  const handleToggleItemAvailability = async (id, currentAvailability) => {
    try {
      await toggleMenuItemAvailability(id, !currentAvailability);
      setMenuItems(menuItems.map(item =>
        item.id === id ? { ...item, available: !currentAvailability } : item
      ));
    } catch (err) {
      setError(prev => ({ ...prev, menuItems: 'Failed to toggle availability' }));
      console.error('Error toggling menu item availability:', err);
    }
  };

  const resetMenuItemForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      discount: 0, // Reset discount to 0
      categoryId: '',
      imagePath: '',
      available: true
    });
    setImagePreview(null);
  };

  // Order functions
  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch(`${API_BASE_URL}/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error('Failed to update status');

      const updatedOrder = await res.json();

      // Update local state
      setOrders(prev =>
        prev.map(order => (order.id === updatedOrder.id ? updatedOrder : order))
      );

      // ✅ Show success alert
      alert(`Order #${orderId} has been marked as ${newStatus}.`);

    } catch (err) {
      // ❌ Show error alert
      alert(`Failed to update status for Order #${orderId}.`);
    }
  };


  const formatTime = (dateTime) => {
    const date = new Date(dateTime);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return date.toLocaleDateString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'PLACED':
        return 'bg-orange-100 text-orange-800';
      case 'READY':
        return 'bg-blue-100 text-blue-800';
      case 'SERVED':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'PLACED':
        return 'Placed';
      case 'READY':
        return 'Ready';
      case 'SERVED':
        return 'Served';
      default:
        return status;
    }
  };

  const filteredOrders = orderFilter === 'all'
    ? orders
    : orders.filter(order => order.status === orderFilter);

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {

      case 'categories':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl poppins-regular poppins-regular font-bold text-gray-800">Meny Kategorier</h2>
            </div>

            {error.categories && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiAlertCircle className="h-5 w-5 text-red-500 mr-3" />
                    <p className="text-sm text-red-700">{error.categories}</p>
                  </div>
                  <button onClick={() => setError(prev => ({ ...prev, categories: null }))}>
                    <FiX className="h-5 w-5 text-red-500" />
                  </button>
                </div>
              </div>
            )}

            {loading.categories ? (
              <div className="p-4 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                <p className="mt-2 text-gray-600">Laddar kategorier...</p>
              </div>
            ) : (
              <>
                {(editingCategoryId === null) && (
                  <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
                    <h3 className="text-xl poppins-regular font-semibold text-gray-800 mb-4">Lägg till ny kategori</h3>
                    <form onSubmit={handleAddCategory} className="flex">
                      <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="Kategorinamn"
                        className="flex-1 p-3 border poppins-regular border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="bg-blue-600 poppins-regular text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors"
                      >
                        Lägg till kategori
                      </button>
                    </form>
                  </div>
                )}
                <div className="bg-white rounded-xl shadow overflow-hidden border border-gray-100">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-xl poppins-regular font-semibold text-gray-800">Befintliga kategorier</h3>
                    <p className="text-sm poppins-regular text-gray-500 mt-1">{categories.length} kategorier totalt</p>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {categories.length === 0 ? (
                      <div className="p-6 text-center poppins-regular text-gray-500">
                        Inga kategorier hittades. Lägg till din första kategori ovan.
                      </div>
                    ) : (
                      categories.map(category => (
                        <div key={category.id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                          {editingCategoryId === category.id ? (
                            <div className="flex-1 flex">
                              <input
                                type="text"
                                value={editCategoryName}
                                onChange={(e) => setEditCategoryName(e.target.value)}
                                className="flex-1 p-2 poppins-regular border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                              <button
                                onClick={() => handleUpdateCategory(category.id)}
                                className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition-colors"
                              >
                                Spara
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${category.color}`}>
                                {category.name}
                              </span>
                              {category.items > 0 && (
                                <span className="text-sm text-gray-500">
                                  {category.items} {category.items === 1 ? 'produkt' : 'produkter'}
                                </span>
                              )}
                            </div>
                          )}
                          <div className="flex space-x-2">
                            {editingCategoryId !== category.id && (
                              <button
                                onClick={() => handleEditCategory(category)}
                                className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-colors"
                              >
                                <FiEdit2 />
                              </button>
                            )}
                            <button
                              onClick={() => {
                                const confirmed = window.confirm("Är du säker på att du vill ta bort denna kategori?");
                                if (confirmed) {
                                  handleDeleteCategory(category.id);
                                }
                              }}
                              className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition-colors"
                            >
                              <FiTrash2 />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        );
      case 'menuItems':
        return (
          <div className="space-y-6">
            <div className="flex  justify-between items-center">
              <h2 className="text-2xl font-bold poppins-regular text-gray-800">Menyartiklar</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Sök artiklar..."
                    className="pl-10 pr-4 py-2 poppins-regular border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {error.menuItems && (
              <div className="bg-red-50 poppins-regular border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiAlertCircle className="h-5 w-5 text-red-500 mr-3" />
                    <p className="text-sm  text-red-700">{error.menuItems}</p>
                  </div>
                  <button onClick={() => setError(prev => ({ ...prev, menuItems: null }))}>
                    <FiX className="h-5 w-5 text-red-500" />
                  </button>
                </div>
              </div>
            )}

            {(editingMenuItemId !== null || (editingMenuItemId === null && newCategory === '')) && (
              <div ref={formRef} className="bg-white poppins-regular rounded-xl shadow p-6 border border-gray-100">
                <h3 className="text-xl poppins-regular font-semibold text-gray-800 mb-4">
                  {editingMenuItemId ? 'Redigera Menyartikel' : 'Lägg till Ny Menyartikel'}
                </h3>
                <form onSubmit={editingMenuItemId ? handleUpdateMenuItem : handleAddMenuItem}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Namn *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Pris *</label>
                          <div className="relative">
                            {formData.price === '' && (
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                SEK
                              </span>
                            )}
                            <input
                              type="number"
                              name="price"
                              value={formData.price}
                              onChange={handleInputChange}
                              step="0.01"
                              min="0"
                              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Rabatt (%)</label>
                          <div className="relative">
                            <input
                              type="number"
                              name="discount"
                              value={formData.discount}
                              onChange={handleInputChange}
                              min="0"
                              max="100"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="absolute right-3 top-3 text-gray-500">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Beskrivning</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                      placeholder="En kort beskrivning av artikeln..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Kategori *</label>
                      <select
                        name="categoryId"
                        value={formData.categoryId}
                        onChange={handleInputChange}
                        className="w-full poppins-regular p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Välj en kategori</option>
                        {categories.map(category => (
                          <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                      </select>
                    </div>

                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bild</label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <label className="cursor-pointer bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors flex items-center">
                          {isUploading ? (
                            <span>Laddar upp...</span>
                          ) : (
                            <>
                              <FiUpload className="mr-2 text-gray-500" />
                              <span>Ladda upp ny bild</span>
                            </>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            disabled={isUploading}
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => setShowImageLibrary(!showImageLibrary)}
                          className="bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors flex items-center"
                        >
                          <FiImage className="mr-2 poppins-regular text-gray-500" />
                          <span>Välj från biblioteket</span>
                        </button>
                      </div>

                      {showImageLibrary && (
                        <div className="border border-gray-200 rounded-lg p-4 max-h-80 overflow-y-auto">
                          <h4 className="text-sm font-medium text-gray-700 mb-3">Bildbibliotek</h4>

                          {loading.images ? (
                            <div className="text-center py-4">
                              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                            </div>
                          ) : error.images ? (
                            <div className="text-red-500 text-sm">{error.images}</div>
                          ) : uploadedImages.length === 0 ? (
                            <div className="text-gray-500 text-sm">Inga bilder uppladdade än</div>
                          ) : (
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                              {uploadedImages.map((image, index) => {
                                const isSelected = formData.imagePath === image;

                                return (
                                  <div
                                    key={index}
                                    onClick={() => handleSelectImageFromLibrary(image)}
                                    className={`relative group cursor-pointer border-2 rounded-lg overflow-hidden transition-shadow ${isSelected ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200 hover:shadow-md'
                                      }`}
                                  >
                                    <img
                                      src={`${API_BASE_URL}${image}`}
                                      alt={`Uppladdad bild ${index}`}
                                      className="w-full h-24 object-cover"
                                    />

                                    {isSelected && (
                                      <div className="absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center text-white font-semibold text-xs">
                                        Vald
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}

                      {uploadError && (
                        <p className="text-sm text-red-600">{uploadError}</p>
                      )}
                      {(imagePreview || formData.imagePath) && (
                        <div className="mt-2">
                          <img
                            src={imagePreview || formData.imagePath}
                            alt="Förhandsvisning"
                            className="h-32 w-32 object-cover rounded-lg border border-gray-200"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {editingMenuItemId ? 'Uppdatera artikel' : 'Lägg till artikel'}
                    </button>

                    {editingMenuItemId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingMenuItemId(null);
                          resetMenuItemForm();
                        }}
                        className="bg-gray-200 poppins-regular text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Avbryt
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}

            {loading.menuItems ? (
              <div className="p-4 text-center">
                <div className="inline-block poppins-regular animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                <p className="mt-2  text-gray-600">Laddar menyartiklar...</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow overflow-hidden border border-gray-100">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl poppins-regular font-semibold text-gray-800">Menyartiklar</h3>
                  <p className="text-sm poppins-regular text-gray-500 mt-1">{menuItems.length} artiklar</p>
                </div>
                <div className="divide-y divide-gray-200">
                  {menuItems.length === 0 ? (
                    <div className="p-6 poppins-regular text-center text-gray-500">
                      Inga artiklar hittades. Lägg till en artikel ovan.
                    </div>
                  ) : (
                    menuItems.map(item => (
                      <div key={item.id} className="p-4 poppins-regular flex flex-col md:flex-row md:items-center hover:bg-gray-50 transition-colors">
                        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                          {item.imagePath ? (
                            <img
                              src={`${API_BASE_URL}${item.imagePath}`}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                            />
                          ) : (
                            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                              <FiMenu className="text-gray-400" size={24} />
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center">
                            <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                              SEK {item.price.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 md:mt-0 flex space-x-2">

                          <button
                            onClick={() => handleEditMenuItem(item)}
                            className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-colors"
                          >
                            <FiEdit2 />
                          </button>
                          <button
                            onClick={() => {
                              const confirmed = window.confirm("Är du säker på att du vill ta bort detta objekt?");
                              if (confirmed) {
                                handleDeleteMenuItem(item.id);
                              }
                            }}
                            className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition-colors"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        );
      case 'orders':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold poppins-regular poppins-regular text-gray-800">Orderhantering</h2>
              <div className="text-sm poppins-regular text-gray-500">
                {filteredOrders.length} beställningar • {new Date().toLocaleDateString()}
              </div>
            </div>

            {error.orders && (
              <div className="bg-red-50 poppins-regular border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-center poppins-regular justify-between">
                  <div className="flex items-center">
                    <FiAlertCircle className="h-5 w-5 text-red-500 mr-3" />
                    <p className="text-sm text-red-700">{error.orders}</p>
                  </div>
                  <button onClick={() => setError(prev => ({ ...prev, orders: null }))}>
                    <FiX className="h-5 w-5 text-red-500" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setOrderFilter('all')}
                className={`px-4 py-2 poppins-regular rounded-lg transition-colors flex items-center ${orderFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
              >
                <FiPackage className="mr-2 " />
                Alla beställningar
              </button>
              <button
                onClick={() => setOrderFilter('PLACED')}
                className={`px-4 poppins-regular py-2 rounded-lg transition-colors flex items-center ${orderFilter === 'PLACED' ? 'bg-orange-500 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
              >
                <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                Lagt
              </button>
              <button
                onClick={() => setOrderFilter('READY')}
                className={`px-4 py-2 poppins-regular rounded-lg transition-colors flex items-center ${orderFilter === 'READY' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                Klar
              </button>
              <button
                onClick={() => setOrderFilter('SERVED')}
                className={`px-4 py-2 poppins-regular rounded-lg transition-colors flex items-center ${orderFilter === 'SERVED' ? 'bg-green-500 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
              >
                <div className="w-2 h-2 poppins-regular rounded-full bg-green-500 mr-2"></div>
                Serverad
              </button>
            </div>

            {loading.orders ? (
              <div className="p-4 text-center">
                <div className="inline-block  animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                <p className="mt-2  text-gray-600">Laddar beställningar...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredOrders.length === 0 ? (
                  <div className="bg-white poppins-regular  rounded-xl shadow p-8 text-center border border-gray-100">
                    <FiPackage className="w-12 h-12 mx-auto text-gray-400" />
                    <h3 className="mt-2 poppins-regular text-lg font-medium text-gray-800">Inga beställningar hittades</h3>
                    <p className="mt-1 poppins-regular text-gray-500">Det finns för närvarande inga beställningar som matchar dina kriterier</p>
                  </div>
                ) : (
                  filteredOrders.map(order => (
                    <div key={order.id} className="bg-white poppins-regular rounded-xl shadow overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                      {/* Clickable header */}
                      <div
                        className="p-4 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center cursor-pointer"
                        onClick={() => toggleOrderExpand(order.id)}
                      >
                        <div className="mb-2 sm:mb-0">
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full mr-3 ${order.status === 'PLACED' ? 'bg-orange-500' :
                              order.status === 'READY' ? 'bg-blue-500' : 'bg-green-500'
                              }`}></div>
                            <div>
                              <h3 className="font-semibold poppins-regular text-lg text-gray-800">
                                Beställning #{order.id} - {order.customerName}
                              </h3>
                              <p className="text-sm text-gray-500">
                                Bord {order.tableNo} • {formatTime(order.orderTime)}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-4 poppins-regular font-semibold text-gray-700">
                            {order.totalAmount.toFixed(2)}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                          {/* Dropdown indicator */}
                          <FiChevronDown
                            className={`ml-2 transform transition-transform ${expandedOrders[order.id] ? 'rotate-180' : ''}`}
                          />
                        </div>
                      </div>

                      {/* Collapsible content */}
                      {expandedOrders[order.id] && (
                        <>
                          <div className="p-4">
                            <h4 className="font-medium text-gray-800 mb-3">Artiklar:</h4>
                            <ul className="divide-y divide-gray-200">
                              {order.items.map((item, index) => (
                                <li key={index} className="py-3 flex justify-between">
                                  <span className="text-gray-700">
                                    {item.quantity}x {item.menuItem.name}
                                  </span>
                                  <span className="text-gray-900 font-medium">
                                    {(item.quantity * (item.menuItem.discountedPrice || item.menuItem.price)).toFixed(2)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-4 bg-gray-50 flex poppins-regular flex-wrap justify-end gap-2">
                            {order.status === 'PLACED' && (
                              <button
                                onClick={() => handleUpdateOrderStatus(order.id, 'READY')}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                              >
                                <FiCheckCircle className="mr-2" />
                                Markera som Klar
                              </button>
                            )}
                            {order.status === 'READY' && (
                              <button
                                onClick={() => handleUpdateOrderStatus(order.id, 'SERVED')}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center"
                              >
                                <FiCheckCircle className="mr-2" />
                                Markera som Serverad
                              </button>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  )))}
              </div>
            )}
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 poppins-regular overflow-hidden poppins-black">
      {/* Mobil sidopanel-bakgrund */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        ></div>
      )}

      {/* Sidopanel */}
      <div className={`fixed inset-y-0 poppins-regular left-0 transform ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 z-30 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between p-6 mb-4 border-b border-gray-200">
          <h1 className="text-2xl poppins-regular font-bold text-gray-800">Café Admin</h1>
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <FiXCircle />
          </button>
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-1">
              <button
                onClick={() => {
                  setActiveTab('categories');
                  setMobileSidebarOpen(false);
                }}
                className={`w-full text-left p-3 rounded-lg flex items-center ${activeTab === 'categories' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FiMenu className="mr-3" />
                Kategorier
              </button>
            </li>
            <li className="mb-1">
              <button
                onClick={() => {
                  setActiveTab('menuItems');
                  setMobileSidebarOpen(false);
                }}
                className={`w-full poppins-regular text-left p-3 rounded-lg flex items-center ${activeTab === 'menuItems' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FiPackage className="mr-3" />
                Menyobjekt
              </button>
            </li>
            <li className="mb-1">
              <button
                onClick={() => {
                  setActiveTab('orders');
                  setMobileSidebarOpen(false);
                }}
                className={`w-full poppins-regular text-left p-3 rounded-lg flex items-center ${activeTab === 'orders' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FiShoppingBag className="mr-3" />
                Beställningar
              </button>
            </li>
            <li className="mb-1">
              <a
                href="/meny"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left p-3 rounded-lg flex items-center text-gray-600 hover:bg-gray-100"
              >
                <FiShoppingBag className="mr-3" />
                Menysida
              </a>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                <span className="text-white">AD</span>
              </div>
              <div>
                <p className="font-medium">Administratör</p>
                <p className="text-xs text-gray-500">admin@cafe.com</p>
              </div>
            </div>
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiChevronDown className={`transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          {profileDropdownOpen && (
            <div className="mt-2 bg-white rounded-lg shadow-md p-2 border border-gray-200">
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                Profilinställningar
              </button>
              <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-gray-700">
                Logga ut
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Huvudinnehåll */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Övre rubrik */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                className="lg:hidden text-gray-600 mr-4"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <FiMenu />
              </button>
              <h1 className="text-xl font-bold poppins-regular text-gray-800 hidden sm:block">
                {activeTab === 'dashboard' && 'Översikt'}
                {activeTab === 'categories' && 'Menykategorier'}
                {activeTab === 'menuItems' && 'Menyobjekt'}
                {activeTab === 'orders' && 'Orderhantering'}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="relative p-2 text-gray-500 hover:text-gray-700"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <FiBell />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="relative">
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm">AD</span>
                  </div>
                  <span className="hidden md:inline-block font-medium">Admin</span>
                  <FiChevronDown className={`hidden md:inline-block transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Inställningar</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logga ut</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Huvudinnehållsområde */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {renderContent()}
        </main>
      </div>
    </div>

  );
};

export default CafeAdminDashboard;