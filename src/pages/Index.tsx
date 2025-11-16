import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', comment: '' });

  const menuItems = [
    { id: 1, name: 'Маргарита', price: 450, category: 'Классические', description: 'Томатный соус, моцарелла, базилик', image: 'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/12e8b4d3-dbfc-41a8-b953-f71b827b8218.jpg' },
    { id: 2, name: 'Пепперони', price: 550, category: 'Мясные', description: 'Пепперони, моцарелла, томатный соус', image: 'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/c68fe53b-ae40-4013-a42d-b6a90259113d.jpg' },
    { id: 3, name: 'Четыре сыра', price: 600, category: 'Сырные', description: 'Моцарелла, горгонзола, пармезан, чеддер', image: 'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/57fa25e9-e007-4e88-9cd2-1648f88f93a5.jpg' },
    { id: 4, name: 'Мясная', price: 650, category: 'Мясные', description: 'Говядина, курица, бекон, колбаски', image: 'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/91b6be94-50ed-44ec-b1c6-fe64d91ecf39.jpg' },
    { id: 5, name: 'Вегетарианская', price: 500, category: 'Овощные', description: 'Томаты, перец, грибы, маслины', image: 'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/2957b147-0a4b-4ecc-a70a-cfd664d4f9d4.jpg' },
    { id: 6, name: 'Гавайская', price: 550, category: 'Специальные', description: 'Курица, ананас, моцарелла', image: 'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/a8fe5bc7-2ada-4891-b5d3-a33fa8f76b27.jpg' },
    { id: 7, name: 'Морская', price: 750, category: 'Морепродукты', description: 'Креветки, мидии, кальмары, лимон', image: 'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/db7e6d07-c933-45da-9575-4475451bbffb.jpg' },
    { id: 8, name: 'BBQ Курица', price: 650, category: 'Мясные', description: 'Курица гриль, BBQ соус, лук, кинза', image: 'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/047cb8ff-55bf-4bb0-a7a1-a273654174b6.jpg' },
    { id: 9, name: 'Дьявольская', price: 600, category: 'Острые', description: 'Острая салями, перец чили, моцарелла', image: 'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/a8a06961-d161-4a0e-bd88-605f99ce9bec.jpg' },
    { id: 10, name: 'Трюфельная', price: 850, category: 'Премиум', description: 'Белые грибы, трюфельное масло, руккола', image: 'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/bdde4d50-5edd-4be1-aa22-7051a9d54614.jpg' },
  ];

  const team = [
    { name: 'Лиса Лариса', role: 'Шеф-повар', specialty: 'Специалист по итальянским рецептам' },
    { name: 'Медведь Миша', role: 'Пиццайоло', specialty: 'Мастер тонкого теста' },
    { name: 'Кот Василий', role: 'Су-шеф', specialty: 'Эксперт по начинкам' },
    { name: 'Кролик Роджер', role: 'Курьер', specialty: 'Быстрая доставка' },
  ];

  const promos = [
    { title: 'Счастливые часы', description: 'С 14:00 до 16:00 скидка 20% на все пиццы', icon: 'Clock' },
    { title: '3 по цене 2', description: 'При заказе трёх пицц — третья в подарок!', icon: 'Gift' },
    { title: 'Первый заказ', description: 'Скидка 15% на первый заказ с кодом FURRY15', icon: 'Sparkles' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заказ принят! 🍕',
      description: 'Наша команда свяжется с вами в ближайшее время',
    });
    setFormData({ name: '', phone: '', address: '', comment: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🍕</span>
              <span className="text-2xl font-bold text-primary">Фурри Пицца</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Меню', 'О нас', 'Доставка', 'Галерея', 'Команда', 'Акции', 'Контакты'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <Button>
              <Icon name="Phone" className="mr-2" size={18} />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Уютная пиццерия с <span className="text-primary">душой</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Добро пожаловать в Фурри Пиццу — место, где пиццу готовят с любовью наши особенные повара! 
                Домашняя атмосфера, большой выбор и уникальная подача от команды пушистых профессионалов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Заказать сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Посмотреть меню
                </Button>
              </div>
            </div>
            <div className="animate-fade-in relative">
              <img 
                src="https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/d742c322-b5f1-4775-89d9-667d5845ad8a.jpg" 
                alt="Фурри Пицца"
                className="rounded-3xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="меню" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наше меню</h2>
            <p className="text-xl text-muted-foreground">Большой ассортимент пицц на любой вкус</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <Card key={item.id} className="hover-scale overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4">{item.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {item.name}
                    <span className="text-primary">{item.price} ₽</span>
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Icon name="Plus" className="mr-2" size={18} />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о нас" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О нашей пиццерии</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Фурри Пицца — это не просто пиццерия, это место, где оживают сказки! Наша команда 
                талантливых антропоморфных поваров создаёт настоящие шедевры итальянской кухни.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Мы используем только свежие ингредиенты, готовим тесто по традиционным рецептам 
                и печём пиццу в настоящей дровяной печи. Каждое блюдо — это частичка нашей души!
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Видов пицц</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">15 минут</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Довольных гостей</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="hover-scale">
                  <CardHeader>
                    <Icon name="Award" className="text-primary mb-2" size={32} />
                    <CardTitle>Качество</CardTitle>
                    <CardDescription>Только свежие продукты премиум класса</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="hover-scale">
                  <CardHeader>
                    <Icon name="Heart" className="text-primary mb-2" size={32} />
                    <CardTitle>Любовь</CardTitle>
                    <CardDescription>Готовим с душой и заботой</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="hover-scale">
                  <CardHeader>
                    <Icon name="Sparkles" className="text-primary mb-2" size={32} />
                    <CardTitle>Уникальность</CardTitle>
                    <CardDescription>Особенная подача каждого блюда</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="hover-scale">
                  <CardHeader>
                    <Icon name="Home" className="text-primary mb-2" size={32} />
                    <CardTitle>Уют</CardTitle>
                    <CardDescription>Домашняя атмосфера</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="доставка" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Доставка</h2>
            <p className="text-xl text-muted-foreground">Быстро и бережно доставим ваш заказ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover-scale">
              <CardHeader>
                <Icon name="Clock" className="mx-auto text-primary mb-4" size={48} />
                <CardTitle>30-40 часов</CardTitle>
                <CardDescription>Среднее время доставки по городу</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-scale">
              <CardHeader>
                <Icon name="MapPin" className="mx-auto text-primary mb-4" size={48} />
                <CardTitle>Зона доставки</CardTitle>
                <CardDescription>В радиусе 10 световых лет от ресторана</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-scale">
              <CardHeader>
                <Icon name="Truck" className="mx-auto text-primary mb-4" size={48} />
                <CardTitle>Бесплатно</CardTitle>
                <CardDescription>При заказе от 1000 рублей</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="галерея" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">Наши блюда и атмосфера</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/12e8b4d3-dbfc-41a8-b953-f71b827b8218.jpg',
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/c68fe53b-ae40-4013-a42d-b6a90259113d.jpg',
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/57fa25e9-e007-4e88-9cd2-1648f88f93a5.jpg',
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/91b6be94-50ed-44ec-b1c6-fe64d91ecf39.jpg',
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/2957b147-0a4b-4ecc-a70a-cfd664d4f9d4.jpg',
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/a8fe5bc7-2ada-4891-b5d3-a33fa8f76b27.jpg',
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/db7e6d07-c933-45da-9575-4475451bbffb.jpg',
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/047cb8ff-55bf-4bb0-a7a1-a273654174b6.jpg',
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/a8a06961-d161-4a0e-bd88-605f99ce9bec.jpg',
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/bdde4d50-5edd-4be1-aa22-7051a9d54614.jpg',
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/d742c322-b5f1-4775-89d9-667d5845ad8a.jpg',
              'https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/afa938cf-b58f-48f7-b41d-a261179f56a7.jpg'
            ].map((imgUrl, i) => (
              <div key={i} className="relative h-64 rounded-2xl overflow-hidden hover-scale group cursor-pointer">
                <img 
                  src={imgUrl}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Eye" className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="команда" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground">Познакомьтесь с нашими талантливыми поварами</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Card key={i} className="text-center hover-scale">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/projects/f0b86b69-d08e-44b8-b98e-408bed5f9ddc/files/6ba3bdfc-8902-418f-a4be-a7edd68030aa.jpg"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-primary">{member.role}</CardDescription>
                  <CardDescription className="mt-2">{member.specialty}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="акции" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Акции и предложения</h2>
            <p className="text-xl text-muted-foreground">Выгодные предложения специально для вас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {promos.map((promo, i) => (
              <Card key={i} className="hover-scale text-center">
                <CardHeader>
                  <Icon name={promo.icon as any} className="mx-auto text-primary mb-4" size={48} />
                  <CardTitle>{promo.title}</CardTitle>
                  <CardDescription className="text-base">{promo.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты и заказ</h2>
            <p className="text-xl text-muted-foreground">Оформите заказ прямо сейчас</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Оформить заказ</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Адрес доставки" 
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Комментарий к заказу" 
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить заказ
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" />
                    Телефон
                  </CardTitle>
                  <CardDescription className="text-lg">+7 (495) 123-45-67</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    Адрес
                  </CardTitle>
                  <CardDescription className="text-lg">г. Москва, ул. Пушистая, д. 15</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-primary" />
                    Режим работы
                  </CardTitle>
                  <CardDescription className="text-lg">Ежедневно с 10:00 до 23:00</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="text-primary" />
                    Email
                  </CardTitle>
                  <CardDescription className="text-lg">info@furrypizza.ru</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍕</span>
                <span className="text-2xl font-bold">Фурри Пицца</span>
              </div>
              <p className="text-background/70">
                Уютная пиццерия с особенными поварами и домашней атмосферой
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Навигация</h3>
              <div className="space-y-2">
                {['Меню', 'О нас', 'Доставка', 'Контакты'].map((item) => (
                  <div key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-background/70 hover:text-background transition-colors">
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="bg-transparent border-background/30 hover:bg-background/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-transparent border-background/30 hover:bg-background/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-transparent border-background/30 hover:bg-background/10"
                  onClick={() => window.open('https://t.me/kulyori', '_blank')}
                >
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2024 Фурри Пицца. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;