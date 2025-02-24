part of 'invoice_bloc.dart';

@freezed
class InvoiceEvent with _$InvoiceEvent {
  const factory InvoiceEvent.loadInvoicesFromAsset() = LoadInvoicesFromAsset;

  const factory InvoiceEvent.filterInvoices(List<String> statuses) =
      FilterInvoices;

  const factory InvoiceEvent.addInvoice(Invoice invoice) = AddInvoice;

  const factory InvoiceEvent.updateInvoice(String id, Invoice updatedInvoice) =
      UpdateInvoice;

  const factory InvoiceEvent.deleteInvoice(String id) = DeleteInvoice;
}
