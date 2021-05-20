

  package com.ENotes.ENotes.Repo;
  
  import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.ENotes.ENotes.entity.AddNotes;
import com.ENotes.ENotes.entity.NoteDetails;
  
  public interface AddNoteRepository extends JpaRepository<AddNotes, Integer>{

	Set<AddNotes> findAllByUid(int uid);

	AddNotes findByNoteId(int id);

	
  
  }
 