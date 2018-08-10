using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actividad1._1_Agosto07
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] FirstArray = { 4, 5, 6, 9, 7 };
            int suma = 0;

            for (int i = 0; i < FirstArray.Length; i++)
            {
                suma += FirstArray[i];
            }
            Console.WriteLine(suma);

            Console.ReadLine();
        }
    }
}
