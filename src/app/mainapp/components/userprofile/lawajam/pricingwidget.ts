import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'lawajam-pricing',
    imports: [DividerModule, ButtonModule, RippleModule],
    template: `
        <div id="pricing">
            <div class="grid grid-cols-12 gap-2 px-0 justify-between mt-10 md:mt-0">
                <div class="col-span-12 lg:col-span-6 p-0 md:p-4">
                    <div class="flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="flex flex-col items-center gap-4 mt-20 mb-10">
                            <div class="text-center bold text-xl">Individual</div>
                            <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$20</span>
                            <span class="text-surface-600 dark:text-surface-200">Billed Monthly</span>
                        </div>
                        <ul class="my-8 list-none p-0 flex flex-col px-8 text-gray-900 dark:text-white space-y-4">
                            <li class="flex items-center">
                                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white mr-3">
                                    <i class="pi pi-check text-xs"></i>
                                </span>
                                <span class="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li class="flex items-center">
                                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white mr-3">
                                    <i class="pi pi-check text-xs"></i>
                                </span>
                                <span class="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li class="flex items-center">
                                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white mr-3">
                                    <i class="pi pi-check text-xs"></i>
                                </span>
                                <span class="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li class="flex items-center">
                                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white mr-3">
                                    <i class="pi pi-check text-xs"></i>
                                </span>
                                <span class="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                        <div class="flex p-footer bg-gray-100 py-14 mt-6">
                            <div class="flex flex-row justify-center w-full px-10">
                                <p-button label="Current Activated Package" severity="contrast" disabled [rounded]="true"></p-button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-6 p-0 md:p-4">
                    <div class="flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="flex flex-col items-center gap-4 mt-20 mb-10">
                            <div class="text-center bold text-xl">Family</div>
                            <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$100</span>
                            <span class="text-surface-600 dark:text-surface-200">Billed Monthly</span>
                        </div>
                        <ul class="my-8 list-none p-0 flex flex-col px-8 text-gray-900 dark:text-white space-y-4">
                            <li class="flex items-center">
                                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white mr-3">
                                    <i class="pi pi-check text-xs"></i>
                                </span>
                                <span class="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li class="flex items-center">
                                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white mr-3">
                                    <i class="pi pi-check text-xs"></i>
                                </span>
                                <span class="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li class="flex items-center">
                                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white mr-3">
                                    <i class="pi pi-check text-xs"></i>
                                </span>
                                <span class="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li class="flex items-center">
                                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white mr-3">
                                    <i class="pi pi-check text-xs"></i>
                                </span>
                                <span class="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                        <div class="flex p-footer bg-gray-100 py-14 mt-6">
                            <div class="flex flex-row justify-center w-full px-10">
                                <p-button label="Upgrade to Family" severity="contrast" [rounded]="true"></p-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class LawajamPricing {}
