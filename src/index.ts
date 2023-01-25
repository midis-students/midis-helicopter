import { Section } from "./Home";
import { Builder, Lifter, Plumber, Cleaner, Job } from "./Jobs";
import { Colors } from "./utils/Colors";
import { Liver } from "@/People";

interface IOptions {
  Budget: number;
  ApartmentsCount: number;
  Sections: number;
  Floors: number;
  AdditionalSpends: number;
  Workers: Array<{ job: new () => Job; count: number }>;
}

function Calculate(options: IOptions) {
  /// Workers
  const workers: Job[] = [];
  options.Workers.forEach((worker) => {
    for (let i = 0; i < worker.count; i++) {
      const inst = new worker.job();
      workers.push(inst);
    }
  });
  const workerPayments = workers.reduce((acc, value) => acc + value.payment, 0);

  /// Home

  const { ApartmentsCount, Sections, Floors } = options;

  const ApartmentsPerSections = Math.floor(ApartmentsCount / Sections);
  const ApartmentsPerFloors = Math.floor(ApartmentsPerSections / Floors);

  const home: Section[] = [];

  for (let i = 0; i < Sections; i++) {
    const section = new Section(Floors, ApartmentsPerFloors);
    home.push(section);
  }

  const apartmentsCount = home.reduce(
    (acc, value) => acc + value.getApartments(),
    0
  );
  const liversCount = home.reduce((acc, value) => acc + value.getLivers(), 0);
  const payLivers = liversCount - Liver.CantPayLivers;
  const payAmount = options.Budget / payLivers;

  /// Output
  const colorWrap = (color: Colors, value: unknown) =>
    color + value + Colors.Reset;
  const sep = (count: number) => "=".repeat(count);

  let output = `
  ${sep(11)} ${Colors.FgYellow} Информация ${Colors.Reset} ${sep(11)}
  Квартир на подъезд: ${colorWrap(Colors.FgBlue, ApartmentsPerSections)}
  Квартир на этаж: ${colorWrap(Colors.FgBlue, ApartmentsPerFloors)}
  Всего квартир: ${colorWrap(Colors.FgBlue, apartmentsCount)}
  Всего жителей: ${colorWrap(Colors.FgBlue, liversCount)}
  Платящие/Не платящие: ${colorWrap(Colors.FgGreen, payLivers)}/${colorWrap(
    Colors.FgRed,
    Liver.CantPayLivers
  )}
  Рабочих: ${colorWrap(Colors.FgBlue, workers.length)}

  ${sep(35)}
  Бюджет: ${colorWrap(Colors.FgGreen, Options.Budget.toLocaleString("ru"))}
  Требуется зарплата: ${colorWrap(
    Colors.FgBlue,
    workerPayments.toLocaleString("ru")
  )}
  Дополнительные траты: ${colorWrap(
    Colors.FgRed,
    Options.AdditionalSpends.toLocaleString("ru")
  )}
  ${sep(35)}

  Требуется с каждого: ${colorWrap(
    Colors.FgMagenta,
    payAmount.toLocaleString("ru-RU", {
      style: "currency",
      currency: "RUB",
    })
  )}
`;

  console.log(output);
}

const Options: IOptions = {
  Budget: 200_000,
  ApartmentsCount: 100,
  Sections: 5,
  Floors: 9,
  AdditionalSpends: 10_000,
  Workers: [
    {
      job: Plumber,
      count: 3,
    },
    {
      job: Builder,
      count: 2,
    },
    {
      job: Cleaner,
      count: 3,
    },
    {
      job: Lifter,
      count: 1,
    },
  ],
};

Calculate(Options);
