import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Lexend',
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Lexend',
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            family: 'Lexend',
          },
        },
      },
    },
  };

  barChartLabels: string[] = [
    'Lun  ',
    'Mar',
    'Mie',
    'Jue',
    'Vie',
    'Sab',
    'Dom',
  ];

  barChartData: ChartConfiguration['data'] = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [5, 8, 6, 10, 7, 11, 12],
        label: 'Cantidad de alarmas',
        backgroundColor: '#A3C2E3',
      },
    ],
  };

  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            family: 'Lexend',
          },
        },
      },
      tooltip: {
        titleFont: {
          family: 'Lexend',
        },
        bodyFont: {
          family: 'Lexend',
        },
      },
    },
  };

  pieChartLabels: string[] = [
    'Paracetamol',
    'Loratadina',
    'Omeprezol',
    'Ibuprofeno',
    'Vitaminas',
  ];

  pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: this.pieChartLabels,
    datasets: [
      {
        data: [20, 30, 15, 25, 10],
        backgroundColor: [
          '#A8D5BA',
          '#A3C2E3',
          '#003B5C',
          '#F4A261',
          '#E08082',
        ],
      },
    ],
  };

  pieChartType: ChartType = 'pie';

  constructor() {}

  ngOnInit(): void {}
}
