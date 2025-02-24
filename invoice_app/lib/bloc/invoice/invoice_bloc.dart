import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:invoice_app/data/repository/invoice_repo.dart';

import '../../data/models/invoice.dart';

part 'invoice_bloc.freezed.dart';
part 'invoice_event.dart';
part 'invoice_state.dart';

class InvoiceBloc extends Bloc<InvoiceEvent, InvoiceState> {
  InvoiceBloc() : super(const InvoiceState.initial()) {
    on<LoadInvoicesFromAsset>(_onLoadInvoices);
    on<FilterInvoices>(_onFilterInvoices);
    // on<AddInvoice>(_onAddInvoice);
    // on<UpdateInvoice>(_onUpdateInvoice);
    // on<DeleteInvoice>(_onDeleteInvoice);
  }

  Future _onLoadInvoices(
      LoadInvoicesFromAsset event, Emitter<InvoiceState> emit) async {
    emit(const InvoiceState.loading());
    // Load the invoices from the asset
    final invoices = await InvoiceRepository().loadInvoicesFromAsset();
    emit(InvoiceState.loaded(invoices));
  }

  Future _onFilterInvoices(
      FilterInvoices event, Emitter<InvoiceState> emit) async {
    emit(const InvoiceState.loading());
    final invoices = state.maybeWhen(
      orElse: () => <Invoice>[],
      loaded: (invoices) => invoices,
    );
    final filteredInvoices = invoices
        .where((invoice) => event.statuses.contains(invoice.status))
        .toList();
    print('event status: ${event.statuses}');
    emit(InvoiceState.loaded(filteredInvoices));
  }
}
