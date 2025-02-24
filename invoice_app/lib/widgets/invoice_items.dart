import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';
import 'package:intl/intl.dart';
import 'package:invoice_app/core/extensions/color_schema.dart';

import '../bloc/invoice/invoice_bloc.dart';

class InvoiceItems extends StatelessWidget {
  const InvoiceItems({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<InvoiceBloc, InvoiceState>(
      builder: (context, state) {
        return state.maybeWhen(orElse: () {
          return SizedBox.shrink();
        }, loading: () {
          return Expanded(child: Center(child: CircularProgressIndicator()));
        }, loaded: (invoices) {
          return invoices.isEmpty
              ? Expanded(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      SvgPicture.asset('illustration-empty.svg'),
                      Text(
                        'There is nothing here',
                        style: context.textTheme.headlineLarge,
                      ),
                      Text(
                        'Create an invoice by clicking the\nNew Invoice button and get started',
                      )
                    ],
                  ),
                )
              : Expanded(
                  child: ListView.builder(
                    itemCount: invoices.length,
                    itemBuilder: (context, index) {
                      final invoice = invoices[index];
                      return Padding(
                        padding: const EdgeInsets.only(bottom: 16),
                        child: Container(
                          decoration: BoxDecoration(
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withValues(alpha: 0.07),
                                // Shadow color and opacity
                                blurRadius: 10,
                                spreadRadius: 2,
                                // Spread of the shadow
                                offset: Offset(0, 4), // Position of the shadow
                              ),
                            ],
                            borderRadius: BorderRadius.circular(8),
                          ),
                          // Match button's border radius
                          child: FilledButton.tonal(
                            style: FilledButton.styleFrom(
                              elevation: 0,
                              foregroundColor:
                                  Theme.of(context).colorScheme.primary,
                              padding: EdgeInsets.zero,
                              visualDensity: VisualDensity.compact,
                              minimumSize: Size(double.infinity, 64),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(8),
                              ),
                              backgroundColor: Theme.of(context)
                                  .colorScheme
                                  .primaryContainer,
                            ),
                            onPressed: () {
                              if (kDebugMode) {
                                print('Invoice ${invoice.id} tapped');
                              }
                            },
                            child: Padding(
                              padding: const EdgeInsets.symmetric(
                                horizontal: 16,
                                vertical: 12,
                              ),
                              child: Table(
                                defaultVerticalAlignment:
                                    TableCellVerticalAlignment.middle,
                                columnWidths: {
                                  0: FlexColumnWidth(1),
                                  1: FlexColumnWidth(2),
                                  2: FlexColumnWidth(3),
                                  3: FlexColumnWidth(2),
                                  4: FixedColumnWidth(152),
                                },
                                children: [
                                  TableRow(
                                    children: [
                                      Text(
                                        invoice.id,
                                        style: context.textTheme.bodyMedium!
                                            .copyWith(
                                          color: Theme.of(context)
                                              .colorScheme
                                              .onSurface,
                                        ),
                                      ),
                                      Text(
                                        'Due ${DateFormat.yMMMd().format(invoice.paymentDue)}',
                                        style: context.textTheme.bodyMedium!
                                            .copyWith(
                                          color: Theme.of(context)
                                              .colorScheme
                                              .onSurface,
                                        ),
                                      ),
                                      Text(
                                        invoice.clientName,
                                        style: context.textTheme.bodyMedium!
                                            .copyWith(
                                          color: Theme.of(context)
                                              .colorScheme
                                              .onSurface,
                                        ),
                                      ),
                                      Text(
                                        '£ ${invoice.total.toStringAsFixed(2)}',
                                        style: context.textTheme.bodyMedium!
                                            .copyWith(
                                          color: Theme.of(context)
                                              .colorScheme
                                              .onSurface,
                                        ),
                                      ),
                                      Row(
                                        spacing: 20,
                                        mainAxisAlignment:
                                            MainAxisAlignment.end,
                                        children: [
                                          FilledButton(
                                              onPressed: null,
                                              style: FilledButton.styleFrom(
                                                padding: EdgeInsets.zero,
                                                visualDensity:
                                                    VisualDensity.compact,
                                                fixedSize: Size(98, 48),
                                                shape: RoundedRectangleBorder(
                                                  borderRadius:
                                                      BorderRadius.circular(8),
                                                ),
                                                disabledBackgroundColor:
                                                    invoice.status == 'draft'
                                                        ? Color(0xff979797)
                                                            .withValues(
                                                                alpha: 0.1)
                                                        : invoice.status ==
                                                                'pending'
                                                            ? Color(0xffFF8F00)
                                                                .withValues(
                                                                    alpha: 0.1)
                                                            : Color(0xff33D69F)
                                                                .withValues(
                                                                    alpha: 0.1),
                                              ),
                                              child: Row(
                                                mainAxisSize: MainAxisSize.min,
                                                spacing: 4,
                                                children: [
                                                  Container(
                                                    width: 8,
                                                    height: 8,
                                                    decoration: BoxDecoration(
                                                      color: invoice.status ==
                                                              'draft'
                                                          ? Color(0xff373B53)
                                                          : invoice.status ==
                                                                  'pending'
                                                              ? Color(
                                                                  0xffFF8F00)
                                                              : Color(
                                                                  0xff33D69F),
                                                      borderRadius:
                                                          BorderRadius.circular(
                                                              99),
                                                    ),
                                                  ),
                                                  Text(
                                                    invoice.status,
                                                    style: context
                                                        .textTheme.bodyMedium!
                                                        .copyWith(
                                                      color: invoice.status ==
                                                              'draft'
                                                          ? Theme.of(context)
                                                              .colorScheme
                                                              .onSurface
                                                          : invoice.status ==
                                                                  'pending'
                                                              ? Color(
                                                                  0xffFF8F00)
                                                              : Color(
                                                                  0xff33D69F),
                                                    ),
                                                  )
                                                ],
                                              )),
                                          SvgPicture.asset(
                                              'icon-arrow-right.svg')
                                        ],
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                );
        });
      },
    );
  }
}
