using Calc.Services;


namespace Calc.Models
{
    public class SingleOperationModel : BaseOperation
    {
        private double _x;
        private double _y;

        //Public properites to converting json 
        public string X
        {
            get { return _x.ToString(System.Globalization.CultureInfo.InvariantCulture); }
            set {  _x = double.Parse(value, System.Globalization.CultureInfo.InvariantCulture); } 
        }
        public string Y {
            get { return _y.ToString(System.Globalization.CultureInfo.InvariantCulture); }
            set { _y = double.Parse(value, System.Globalization.CultureInfo.InvariantCulture); }
        }

        public OperationType Type { get; set; }

        public double Result { get; private set; }

        public void Count()
        {
            switch (Type)
            {
                case OperationType.Sum:
                    Result = Sum(_x, _y);
                    break;
                case OperationType.Substraction:
                    Result = Substraction(_x, _y);
                    break;
                case OperationType.Divsion:
                    Result = Divison(_x, _y);
                    break;
                case OperationType.Multiplication:
                    Result = Multiplication(_x, _y);
                    break;
            }

        }

    }
}
