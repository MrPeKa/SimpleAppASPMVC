
namespace Calc.Services
{
    interface IOperation
    {
        double Sum(double x, double y);
        double Substraction(double x, double y);
        double Multiplication(double x, double y);
        double Divison(double x, double y);
    }
}