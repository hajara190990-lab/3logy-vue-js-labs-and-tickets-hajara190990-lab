import { ref, onMounted } from 'vue'

export function useProducts() {
  const products = ref([])
  const loading = ref(true)

  const fallbackProducts = [
    { id: 1, title: 'Laptop Pro', price: 999, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Wireless Mouse', price: 29, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'USB-C Hub', price: 49, image: 'https://via.placeholder.com/150' },
  ]

  async function fetchProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      if (!res.ok) throw new Error('API unavailable')
      products.value = await res.json()
    } catch (err) {
      console.warn('Using fallback products:', err.message)
      products.value = fallbackProducts
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchProducts)

  return { products, loading }
}
