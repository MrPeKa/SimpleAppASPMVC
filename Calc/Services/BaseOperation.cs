
namespace Calc.Services
{
    public abstract class BaseOperation : IOperation
    {

        public double Sum(double x, double y)
        {
            return x + y;
        }

        public double Substraction(double x, double y)
        {
            return x - y;
        }

        public double Multiplication(double x, double y)
        {
            return x*y;
        }

        public double Divison(double x, double y)
        {
            return x / y;
        }

    }
}