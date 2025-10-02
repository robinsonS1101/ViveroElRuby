
        // Obtener el año actual
        const year = new Date().getFullYear();
        // Insertar el año en el elemento con id "year"

        document.getElementById('year').textContent = year;
        // Crear efecto de partículas
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Tamaño aleatorio
                const size = Math.random() * 4 + 1;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Posición aleatoria
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Color aleatorio entre verde y azul
                const colors = ['#00ff88', '#00ccff', '#bd00ff'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                particle.style.background = color;
                
                // Animación aleatoria
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${delay}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Base de datos de productos
        const products = [
            {
                id: 1,
                name: "Abarco de rio",
                category: "forestales",
                price: 4500,
                availability: "in-stock",
                image: "img/Abarco-de-rio.jpeg",
                description: "Crecimiento: Rápido en suelos húmedos y profundos, cerca de ríos y quebradas. Importancia ecológica: Ayuda a conservar cuencas hidrográficas y es refugio de fauna silvestre."
            },
            {
                id: 2,
                name: "Algarrobo",
                category: "forestales",
                price: 6500,
                availability: "in-stock",
                image: "img/Algarrobo.jpeg",
                description: "Crecimiento: Moderado, prefiere suelos profundos y bien drenados Importancia ecológica: Fija nitrógeno, mejora la fertilidad del suelo y es refugio de fauna silvestre"
            },
            {
                id: 3,
                name: "Arayan",
                category: "frutales",
                price: 7500,
                availability: "in-stock",
                image: "img/Arrayan.jpeg",
                description: "Crecimiento: Moderado, adaptable a diferentes suelos y climas Importancia ecológica: Atrae aves y polinizadores, ayuda a la biodiversidad"
            },
            {
                id: 4,
                name: "Cachimbo",
                category: "frutales",
                price: 3800,
                availability: "in-stock",
                image: "img/Cachimbo.jpeg",
                description: "Crecimiento: Moderado, prefiere suelos húmedos y profundos Importancia ecológica: Proporciona alimento a aves y fauna silvestre,Fruto: Drupa pequeña, comestible, de sabor dulce Usos: Fruto para consumo fresco; madera utilizada localmente"
            },
            {
                id: 5,
                name: "Caño fistol",
                category: "ornamentales",
                price: 8500,
                availability: "in-stock",
                image: "img/Caño fistol.jpeg",
                description: "Crecimiento: Rápido, tolera suelos variados Importancia ecológica: Atrae polinizadores y embellece el entorno, Usos: Ideal para parques, avenidas y jardines por su belleza"
            },
            {
                id: 6,
                name: "Eucalipto pellita",
                category: "forestales",
                price: 5500,
                availability: "in-stock",
                image: "img/Eucalipto pellita.jpeg",
                description: "Usos: Reforestación, madera para construcción y papel, ornamental Distribución: Originario de Australia y Asia, adaptado en Colombia Crecimiento: Muy rápido, tolera suelos pobres y húmedos Importancia ecológica: Mejora la calidad del suelo y captura carbono"
            },
            {
                id: 7,
                name: "Eucalipto",
                category: "forestales",
                price: 3500,
                availability: "in-stock",
                image: "img/Eucalipto.jpeg",
                description: "Usos: Madera para construcción, papel, aceites esenciales y reforestación Crecimiento: Muy rápido, tolera suelos pobres y húmedos Importancia ecológica: Captura carbono, mejora la calidad del suelo y sirve para cortinas rompevientos"
            },
            {
                id: 8,
                name: "Guacimo",
                category: "forestales",
                price: 2800,
                availability: "in-stock",
                image: "img/Guacimo.jpeg",
                description: "Usos: Sombra, madera, alimento para ganado y restauración ecológica, Crecimiento: Rápido, tolera suelos pobres y secos Importancia ecológica: Mejora la fertilidad del suelo y es refugio de fauna silvestre"
            },
            {
                id: 9,
                name: "Guamo machete",
                category: "frutales",
                price: 2500,
                availability: "in-stock",
                image: "img/Guamo machete.jpeg",
                description: "Usos: Fruto para consumo fresco, sombra y restauración ecológica, Crecimiento: Rápido, prefiere suelos húmedos y fértiles Importancia ecológica: Fija nitrógeno, mejora la fertilidad del suelo y es refugio de fauna silvestre"
            },
            {
                id: 10,
                name: "Gualanday",
                category: "frutales",
                price: 5200,
                availability: "in-stock",
                image: "img/Gualanday.jpeg",
                description: "Usos: Ornamental en parques y avenidas, madera para carpintería, Crecimiento: Rápido, tolera suelos variados Importancia ecológica: Atrae polinizadores y embellece el entorno"
            },
            {
                id: 11,
                name: "Igua",
                category: "frutales",
                price: 5200,
                availability: "in-stock",
                image: "img/Igua.jpeg",
                description: "Usos: Fruto para consumo fresco, sombra y restauración ecológica, Crecimiento: Rápido, prefiere suelos húmedos y fértiles Importancia ecológica: Fija nitrógeno, mejora la fertilidad del suelo y es refugio de fauna silvestre"
            },
            {
                id: 12,
                name: "Machaco",
                category: "forestales",
                price: 5200,
                availability: "in-stock",
                image: "img/Machaco.jpeg",
                description: "Usos: Madera para construcción y carpintería Distribución: Nativo de América tropical, presente en Colombia Crecimiento: Lento a moderado, prefiere suelos húmedos y profundos Importancia ecológica: Refugio de fauna silvestre y conservación de bosques"
            },
            {
                id: 13,
                name: "Marañon",
                category: "frutales",
                price: 3200,
                availability: "in-stock",
                image: "img/Marañon.jpeg",
                description: "Usos: Fruto para consumo fresco, nuez para alimentación y repostería, Crecimiento: Moderado, prefiere suelos arenosos y bien drenados Importancia ecológica: Atrae fauna silvestre y polinizadores"
            },
            {
                id: 14,
                name: "Ocobo rosado",
                category: "ornamentales",
                price: 4200,
                availability: "in-stock",
                image: "img/Ocobo rosado.jpeg",
                description: "Usos: Ornamental en parques, avenidas y jardines Distribución: Nativo de América tropical, común en Colombia Crecimiento: Rápido, tolera suelos variados Importancia ecológica: Atrae polinizadores y embellece el entorno"
            },
            {
                id: 15,
                name: "Palma de asai",
                category: "frutales",
                price: 8100,
                availability: "in-stock",
                image: "img/Palma de Asai.jpeg",
                description: "Usos: Fruto para consumo fresco, jugos y productos saludables, Crecimiento: Rápido, prefiere suelos húmedos y bien drenados Importancia ecológica: Proporciona alimento y refugio a fauna silvestre, ayuda a conservar ecosistemas húmedos"
            },
            {
                id: 16,
                name: "Saman",
                category: "ornamentales",
                price: 7500,
                availability: "in-stock",
                image: "img/Saman.jpeg",
                description: "Usos: Sombra en potreros y parques, madera para carpintería Distribución: Nativo de América tropical, común en Colombia Crecimiento: Rápido, tolera suelos variados Importancia ecológica: Fija nitrógeno, mejora la fertilidad del suelo y es refugio de fauna silvestre"
            },
            {
                id: 17,
                name: "Yopo",
                category: "forestales",
                price: 3800,
                availability: "in-stock",
                image: "img/Yopo.jpeg",
                description: "Usos: Sombra en potreros y parques, madera para carpintería, Crecimiento: Rápido, tolera suelos variados Importancia ecológica: Fija nitrógeno, mejora la fertilidad del suelo y es refugio de fauna silvestree"
            },
            {
                id: 18,
                name: "abono organico 5Kg",
                category: "abonos",
                price: 18000,
                availability: "in-stock",
                image: "img/abono.png",
                description: "Abono natural para mejorar la calidad del suelo"
            }/*,
            {
                id: 19,
                name: "Herbicida Selectivo 1L",
                category: "herbicidas",
                price: 45000,
                availability: "in-stock",
                image: "https://images.unsplash.com/photo-1589923189623-b7c8fea2db12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Control de malezas sin afectar cultivos"
            },
            {
                id: 20,
                name: "Fungicida Sistémico 500ml",
                category: "fungicidas",
                price: 32000,
                availability: "in-stock",
                image: "https://images.unsplash.com/photo-1589923189623-b7c8fea2db12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description: "Protección contra hongos y enfermedades"
            }*/
        ];

        // Elementos del DOM
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const categoryFilter = document.getElementById('categoryFilter');
        const priceFilter = document.getElementById('priceFilter');
        const availabilityFilter = document.getElementById('availabilityFilter');
        const sortFilter = document.getElementById('sortFilter');
        const productsContainer = document.getElementById('productsContainer');
        const searchResults = document.getElementById('searchResults');
        const resultsText = document.getElementById('resultsText');
        const noResults = document.getElementById('noResults');

        // Funcionalidad del menú móvil con scroll
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNavContainer = document.getElementById('mobileNavContainer');
        const mobileNav = document.getElementById('mobileNav');
        const mobileCloseBtn = document.getElementById('mobileCloseBtn');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        // Abrir menú móvil
        mobileMenuBtn.addEventListener('click', function() {
            mobileNavContainer.classList.add('active');
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Cerrar menú móvil
        function closeMobileMenu() {
            mobileNavContainer.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }

        mobileCloseBtn.addEventListener('click', closeMobileMenu);
        mobileNavContainer.addEventListener('click', function(e) {
            if (e.target === mobileNavContainer) {
                closeMobileMenu();
            }
        });

        // Cerrar menú al hacer clic en un enlace
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.getAttribute('href').startsWith('http') || this.getAttribute('href').startsWith('tel')) {
                    return;
                }
                
                e.preventDefault();
                const targetId = this.getAttribute('href');
                closeMobileMenu();
                
                setTimeout(() => {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }, 300);
            });
        });

        // Cargar productos al iniciar
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            displayProducts(products);
            setupWhatsAppButtons();
        });

        // Event listeners para búsqueda y filtros
        searchButton.addEventListener('click', applyFilters);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyFilters();
            }
        });

        categoryFilter.addEventListener('change', applyFilters);
        priceFilter.addEventListener('change', applyFilters);
        availabilityFilter.addEventListener('change', applyFilters);
        sortFilter.addEventListener('change', applyFilters);

        // Función principal para aplicar filtros
        function applyFilters() {
            const searchTerm = searchInput.value.toLowerCase();
            const category = categoryFilter.value;
            const priceRange = priceFilter.value;
            const availability = availabilityFilter.value;
            const sortBy = sortFilter.value;

            let filteredProducts = products.filter(product => {
                const matchesSearch = !searchTerm || 
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm) ||
                    product.category.includes(searchTerm);

                const matchesCategory = !category || product.category === category;

                let matchesPrice = true;
                if (priceRange) {
                    if (priceRange === '0-50000') {
                        matchesPrice = product.price <= 50000;
                    } else if (priceRange === '50000-100000') {
                        matchesPrice = product.price > 50000 && product.price <= 100000;
                    } else if (priceRange === '100000-200000') {
                        matchesPrice = product.price > 100000 && product.price <= 200000;
                    } else if (priceRange === '200000+') {
                        matchesPrice = product.price > 200000;
                    }
                }

                const matchesAvailability = !availability || product.availability === availability;

                return matchesSearch && matchesCategory && matchesPrice && matchesAvailability;
            });

            // Ordenar productos
            filteredProducts = sortProducts(filteredProducts, sortBy);

            // Mostrar resultados
            displayProducts(filteredProducts);

            // Configurar botones de WhatsApp después de mostrar productos
            setupWhatsAppButtons();

            // Mostrar información de resultados
            if (filteredProducts.length === 0) {
                searchResults.style.display = 'none';
                noResults.style.display = 'block';
            } else {
                noResults.style.display = 'none';
                searchResults.style.display = 'block';
                resultsText.textContent = `Se encontraron ${filteredProducts.length} producto(s)`;
                
                setTimeout(() => {
                    searchResults.style.display = 'none';
                }, 3000);
            }
        }

        // Función para ordenar productos
        function sortProducts(products, sortBy) {
            return products.sort((a, b) => {
                switch(sortBy) {
                    case 'name':
                        return a.name.localeCompare(b.name);
                    case 'price-low':
                        return a.price - b.price;
                    case 'price-high':
                        return b.price - a.price;
                    case 'popular':
                        return b.id - a.id;
                    default:
                        return 0;
                }
            });
        }

        // Función para mostrar productos
        function displayProducts(productsToDisplay) {
            productsContainer.innerHTML = '';

            if (productsToDisplay.length === 0) {
                noResults.style.display = 'block';
                return;
            }

            noResults.style.display = 'none';

            productsToDisplay.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card scroll-animate';
                productCard.innerHTML = `
                    <div class="product-image" style="background-image: url('${product.image}');">
                        <div class="product-badge ${product.availability === 'pre-order' ? 'pre-order' : 'in-stock'}">
                            ${product.availability === 'pre-order' ? 'PRE-ORDEN' : 'DISPONIBLE'}
                        </div>
                    </div>
                    <div class="product-info">
                        <div class="product-category">${getCategoryName(product.category)}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-meta">
                            <span class="product-price">$${product.price.toLocaleString()}</span>
                            <span class="product-stock ${product.availability === 'in-stock' ? 'in-stock' : 'pre-order'}">
                                <i class="fas ${product.availability === 'in-stock' ? 'fa-check-circle' : 'fa-clock'}"></i>
                                ${product.availability === 'in-stock' ? 'En stock' : 'Pre-orden'}
                            </span>
                        </div>
                        <div class="product-actions">
                            <button class="whatsapp-btn" data-product="${product.name}">
                                <i class="fab fa-whatsapp"></i> 
                                <span class="btn-text">Cotizar por WhatsApp</span>
                            </button>
                        </div>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });

            // Re-aplicar animaciones de scroll
            checkScroll();
        }

        // Función mejorada para configurar botones de WhatsApp
        function setupWhatsAppButtons() {
            document.querySelectorAll('.whatsapp-btn').forEach(button => {
                button.addEventListener('click', function() {
                    // Mostrar efecto de carga
                    this.classList.add('loading');
                    
                    setTimeout(() => {
                        const productCard = this.closest('.product-card');
                        const productName = this.getAttribute('data-product') || 
                                          productCard.querySelector('.product-name').textContent;
                        const productPrice = productCard.querySelector('.product-price').textContent;
                        const productCategory = productCard.querySelector('.product-category').textContent;
                        
                        // Crear mensaje más detallado y profesional
                        const message = `¡Hola Vivero El Ruby! 🌱\n\n` +
                                      `Estoy interesado en el siguiente producto:\n\n` +
                                      `📦 *Producto:* ${productName}\n` +
                                      `💰 *Precio referencial:* ${productPrice}\n` +
                                      `📋 *Categoría:* ${productCategory}\n\n` +
                                      `Me gustaría:\n` +
                                      `• Recibir información técnica detallada\n` +
                                      `• Conocer disponibilidad actual\n` +
                                      `• Solicitar una cotización formal\n` +
                                      `• Consultar sobre descuentos por volumen\n` +
                                      `• Coordinar entrega o recogida\n\n` +
                                      `Agradezco su pronta respuesta.`;
                        
                        const whatsappUrl = `https://wa.me/573178714546?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                        
                        // Quitar efecto de carga
                        this.classList.remove('loading');
                        
                        // Mostrar notificación de confirmación
                        showNotification('Redirigiendo a WhatsApp...', 'success');
                        
                    }, 500);
                });
            });
        }

        // Función para mostrar notificaciones
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                ${message}
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }

        // Función para obtener nombre de categoría
        function getCategoryName(category) {
            const categories = {
                'frutales': 'Árbol Frutal',
                'ornamentales': 'Árbol Ornamental',
                'forestales': 'Árbol Forestal',
                'abonos': 'Abono Orgánico',
                'herbicidas': 'Herbicida',
                'fungicidas': 'Fungicida'
            };
            return categories[category] || category;
        }

        // Smooth scroll para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Animación al hacer scroll
        function checkScroll() {
            const elements = document.querySelectorAll('.scroll-animate');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);
