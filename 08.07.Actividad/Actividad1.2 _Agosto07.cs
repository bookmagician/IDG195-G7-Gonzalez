using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actividad1__Agosto07
{
    class Program
    {
        public static void Main(string[] args)
        {
            int[] FirstArray = { 4, 5, 6, 9, 7 };

            int mayor = Mayor(FirstArray);
            int menor = Menor(FirstArray);
            Console.WriteLine("Mayor:");
            Console.WriteLine(mayor);
            Console.WriteLine("Menor:");
            Console.WriteLine(menor);

            Console.ReadLine();
        }

        public static int Mayor(int[] FirstArray)
        {
            int mayor = FirstArray[0];

            for (int i = 0; i < FirstArray.Length; i++)
            {
                if (FirstArray[i] > mayor)
                {
                    mayor = FirstArray[i];
                }
            }
            return mayor;
        }

        public static int Menor(int[] FirstArray)
        {
            int menor = FirstArray[0];

            for (int i = 0; i < FirstArray.Length; i++)
            {
                if (FirstArray[i] < menor)
                {
                    menor = FirstArray[i];
                }
            }

            return menor;
        }
    }
}
