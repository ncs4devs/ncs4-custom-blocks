import * as actionTypes from './recipientActionTypes';

export function createRecipient(data) {
  return {
    type: actionTypes.Create,
    data,
  }
}

export function deleteRecipient(data) {
  return {
    type: actionTypes.Delete,
    data,
  }
}

export function editRecipient(oldData, data) {
  return {
    type: actionTypes.Edit,
    oldData,
    data,
  }
}

export function setRecipients(data) {
  return {
    type: actionTypes.SetRecipients,
    data,
  }
}

export function setUseOrgs(useOrgs) {
  return {
    type: actionTypes.SetUseOrgs,
    useOrgs,
  }
}

export function SetCurrentYear(year) {
  return {
    type: actionTypes.SetCurrentYear,
    year,
  }
}

export function SetCurrentYearIf(year) {
  return {
    type: actionTypes.SetCurrentYearIf,
    year,
  }
}

export function RecalculateCurrentYear() {
  return {
    type: actionTypes.RecalculateCurrentYear,
  }
}

export function addOrganization(organization) {
  return {
    type: actionTypes.AddOrganization,
    organization,
  }
}

export function sortRecipients() {
  return {
    type: actionTypes.Sort,
  }
}

export function updateCurrentYear(year) {
  return {
    type: actionTypes.SetCurrentYearIf,
    year,
  }
}
