namespace ProvaPub.Services
{
    public class RandomService
    {
        private Random random;

        public RandomService()
        {
            random = new Random(Guid.NewGuid().GetHashCode());
        }

        public int GetRandomNumber()
        {
            return random.Next(100);
        }
    }
}
